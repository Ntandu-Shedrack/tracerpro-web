"use client";

import { DataTable } from "@/components/sections/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Pencil, Trash } from "lucide-react";
import Link from "next/link";

// Type
type Furniture = {
  id: number;
  name: string;
  barcode: string;
  description: string;
  condition: string;
  unitValue: number | null;
  totalValue: number | null;
  dateOfPurchase: string;
  supplier: string;
};

// Dummy data
const dummyFurniture: Furniture[] = [
  {
    id: 1,
    name: "Armchair",
    barcode: "UR001695",
    description: "Executive leather chair",
    condition: "Good",
    unitValue: 250000,
    totalValue: 295000,
    dateOfPurchase: "2022-01-01",
    supplier: "Furniture Supplier Inc.",
  },
];

// Columns
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
            onClick={() => alert(`Edit ${furniture.name}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete ${furniture.name}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function FurniturePage() {
  return (
    <DataTable
      title="Furniture List"
      columns={columns}
      data={dummyFurniture}
      searchPlaceholder="Search furniture..."
      toolbarActions={
        <>
          <Button variant="outline" onClick={() => console.log("Download...")}>
            <DownloadIcon className="w-4 h-4" />
          </Button>
          <Link
            href="/projects/furniture/import"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            + Import
          </Link>
        </>
      }
    />
  );
}
