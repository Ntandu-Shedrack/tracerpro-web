"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { DownloadIcon, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { DataTable } from "../sections/DataTable";

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
            onClick={() => alert(`Edit ${book.title}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete ${book.title}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function BooksPage() {
  return (
    <DataTable
      title="Books List"
      columns={columns}
      data={dummyBooks}
      searchPlaceholder="Search books..."
      toolbarActions={
        <>
          <Button variant="outline" onClick={() => console.log("Download...")}>
            <DownloadIcon className="w-4 h-4" />
          </Button>
          <Link
            href="/projects/books/import"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            + Import
          </Link>
        </>
      }
    />
  );
}
