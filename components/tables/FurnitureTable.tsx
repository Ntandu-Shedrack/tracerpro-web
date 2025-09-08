"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DownloadIcon, Pencil, Trash } from "lucide-react";
import Link from "next/link";

// Define Furniture type
type Furniture = {
  id: number;
  projectId: number;
  name: string;
  category: string;
  barcode: string;
  description: string;
  condition: "Good" | "Bad" | "Out of Use";
  unitValue: number | null;
  totalValue: number | null;
  dateOfPurchase: string;
  invoiceNumber: string;
  supplier: string;
};

// Dummy data
const dummyFurniture: Furniture[] = [
  {
    id: 1,
    projectId: 1,
    name: "Armchair",
    category: "Furniture",
    barcode: "UR001695",
    description: "Executive leather black chair",
    condition: "Good",
    unitValue: 250000,
    totalValue: 250000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
  {
    id: 2,
    projectId: 1,
    name: "Desk",
    category: "Furniture",
    barcode: "UR001696",
    description: "Executive wooden desk",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
  {
    id: 3,
    projectId: 1,
    name: "Desk",
    category: "Furniture",
    barcode: "UR001696",
    description: "Executive wooden desk",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
  {
    id: 4,
    projectId: 1,
    name: "Desk",
    category: "Furniture",
    barcode: "UR001696",
    description: "Executive wooden desk",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
  {
    id: 5,
    projectId: 1,
    name: "Desk",
    category: "Furniture",
    barcode: "UR001696",
    description: "Executive wooden desk",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
  {
    id: 6,
    projectId: 1,
    name: "Desk",
    category: "Furniture",
    barcode: "UR001696",
    description: "Executive wooden desk",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "Furniture Supplier Inc.",
  },
];

// Table columns
const columns: ColumnDef<Furniture>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "barcode", header: "Barcode" },
  { accessorKey: "description", header: "Description" },
  { accessorKey: "condition", header: "Condition" },
  { accessorKey: "unitValue", header: "Unit Value" },
  { accessorKey: "totalValue", header: "Total Value" },
  { accessorKey: "dateOfPurchase", header: "Date of Purchase" },
  { accessorKey: "supplier", header: "Supplier" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const furniture = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => alert(`Edit furniture ${furniture.id}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete furniture ${furniture.id}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function FurniturePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = React.useState<Furniture[]>(dummyFurniture);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      if (value == null) return false;
      return value.toString().toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  return (
    <div className="space-y-4">
      {/* Header with title, search input, and new furniture button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 backdrop-blur">
        {/* Title */}
        <h2 className="text-xl font-bold">Furniture List</h2>

        {/* Toolbar (aligned right) */}
        <div className="flex flex-wrap items-center gap-2 justify-end">
          {/* Search */}
          <Input
            placeholder="Search furniture..."
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
            href="/projects/furniture/import"
            className="py-2 btn btn-primary hover:bg-[#001E80] transition whitespace-nowrap"
          >
            + Import
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-hidden">
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

      {/* Pagination */}
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </Button>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button
              key={i}
              size="sm"
              variant={
                table.getState().pagination.pageIndex === i
                  ? "default"
                  : "outline"
              }
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
