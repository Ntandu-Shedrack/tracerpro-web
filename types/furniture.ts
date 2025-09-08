import { z } from "zod";

export const createFurnitureSchema = z.object({
  name: z.string().min(3, "Furniture name is required"),
  category: z.string().min(2, "Category is required"),
  barcode: z.string().min(2, "Barcode is required"),
  description: z.string().min(5, "Description is required"),
  condition: z.enum(["Good", "Bad", "Out of Use"]),
  unitValue: z.string().min(1, "Unit value must be positive").nullable(),
  totalValue: z.string().min(1, "Total value must be positive").nullable(),
  dateOfPurchase: z.string().min(10, "Date of purchase is required"),
  invoiceNumber: z.string().min(2, "Invoice number is required"),
  supplier: z.string().min(2, "Supplier is required"),
});

export type furnitureCreateData = z.infer<typeof createFurnitureSchema>;

export const importFurnitureSchema = z.object({
  data: z.array(
    z.object({
      category: z.string().min(2, "Category is required"),
      file: z.file().mime(["text/csv", "text/excel"]),
    })
  ),
});

export type furnitureImportData = z.infer<typeof importFurnitureSchema>;
