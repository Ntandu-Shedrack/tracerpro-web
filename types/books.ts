import { z } from "zod";

export const createBookSchema = z.object({
  type: z.enum(["Book", "Audio", "E-book"], "Invalid Book Type"),
  barcode: z.string().min(2, "Barcode is required"),
  isbnNumber: z.string().min(10, "ISBN Number is Required"),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  yearOfPublication: z.string().min(4, "Year of Publication is Required"),
  dateOfAcquisition: z.date(),
  unitPrice: z.string().min(1, "Unit Price must be positive").nullable(),
  totalPrice: z.string().min(1, "Total Price must be positive").nullable(),
  condition: z.enum(["Good", "Bad", "Out of Use"]),
  homeLibrary: z.string().min(2, "Home Library is required"),
});
export type BookCreateData = z.infer<typeof createBookSchema>;

export const importBookSchema = z.object({
  data: z.array(
    z.object({
      category: z.string().min(2, "Category is required"),
      file: z.file().mime(["text/csv", "text/excel"]),
    })
  ),
});
export type BookImportData = z.infer<typeof importBookSchema>;
