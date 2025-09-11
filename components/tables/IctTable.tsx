"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { DataTable } from "../sections/DataTable";

// -----------------------------
// Types
// -----------------------------
type Ict = {
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

// -----------------------------
// Dummy Data
// -----------------------------
const dummyIct: Ict[] = [
  {
    id: 1,
    projectId: 1,
    name: "Laptop",
    category: "ICT",
    barcode: "UR001695",
    description: "Dell Latitude 5420",
    condition: "Good",
    unitValue: 250000,
    totalValue: 250000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "ICT Supplier Inc.",
  },
  {
    id: 2,
    projectId: 1,
    name: "Desktop",
    category: "ICT",
    barcode: "UR001696",
    description: "Dell OptiPlex 7090",
    condition: "Good",
    unitValue: 350000,
    totalValue: 350000 * 1.18,
    dateOfPurchase: "2022-01-01",
    invoiceNumber: "INV-001",
    supplier: "ICT Supplier Inc.",
  },
];

// -----------------------------
// Table Columns
// -----------------------------
const columns: ColumnDef<Ict>[] = [
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
      const ict = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => alert(`Edit ${ict.name}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete ${ict.name}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

// -----------------------------
// Component
// -----------------------------
export default function IctPage() {
  return (
    <DataTable
      title="ICT Assets List"
      columns={columns}
      data={dummyIct}
      searchPlaceholder="Search ICT Asset..."
      toolbarActions={
        <>
          <Button variant="outline" onClick={() => console.log("Download...")}>
            <DownloadIcon className="w-4 h-4" />
          </Button>
          <Link
            href="/projects/ict-assets/import"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            + Import
          </Link>
        </>
      }
    />
  );
}
