"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DownloadIcon, Pencil, Trash } from "lucide-react";
import Link from "next/link";

// Define Book type
type Book = {
  id: number;
  projectId: number;
  type: "Book" | "Audio" | "E-Book";
  barcode: string;
  isbnNumber: string;
  author: string;
  title: string;
  yearOfPublication: string;
  dateOfAcquisition: string | null;
  unitPrice: number | null;
  totalPrice: number | null;
  condition: "Good" | "Bad" | "Out of Use";
  homeLibrary: string;
};

// Dummy data
const dummyBooks: Book[] = [
  {
    id: 1,
    projectId: 1,
    type: "Book",
    barcode: "BC12345",
    isbnNumber: "978-3-16-148410-0",
    author: "John Doe",
    title: "Intro to Databases",
    yearOfPublication: "2021",
    dateOfAcquisition: "01/01/24",
    unitPrice: 10500,
    totalPrice: 12600,
    condition: "Good",
    homeLibrary: "Main Library",
  },
  {
    id: 2,
    projectId: 1,
    type: "E-Book",
    barcode: "BC54321",
    isbnNumber: "978-1-4028-9462-6",
    author: "Jane Smith",
    title: "Learning Node.js",
    yearOfPublication: "2022",
    dateOfAcquisition: "10/06/24",
    unitPrice: 8050,
    totalPrice: 10500,
    condition: "Good",
    homeLibrary: "Digital Library",
  },
];

// Table columns
const columns: ColumnDef<Book>[] = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "author", header: "Author" },
  { accessorKey: "isbnNumber", header: "ISBN" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "condition", header: "Condition" },
  { accessorKey: "yearOfPublication", header: "Publication Year" },
  { accessorKey: "unitPrice", header: "Unit Price" },
  { accessorKey: "totalPrice", header: "Total Price" },
  { accessorKey: "dateOfAcquisition", header: "Acquisition Date" },
  { accessorKey: "homeLibrary", header: "Library" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const book = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => alert(`Edit book ${book.id}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete book ${book.id}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function BooksPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = React.useState<Book[]>(dummyBooks);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Header with title + New Book button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 backdrop-blur">
        {/* Title */}
        <h2 className="text-xl font-bold">Books List</h2>

        {/* Toolbar (aligned right) */}
        <div className="flex flex-wrap items-center gap-2 justify-end">
          {/* Search */}
          <Input
            placeholder="Search books..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-[200px] md:w-[250px]"
          />

          {/* Buttons group */}
          <Button
            variant="outline"
            onClick={() => {
              console.log("Downloading List");
            }}
          >
            <DownloadIcon />
          </Button>

          <Link
            href="/projects/ict-assets/import"
            className="py-2 btn btn-primary hover:bg-[#001E80] transition whitespace-nowrap"
          >
            + Import
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border">
        <table className="w-full border-collapse">
          <thead className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-3 text-left font-medium text-sm"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-t hover:bg-muted/50 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
