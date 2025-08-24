import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(3, "Project name is required"),
  projectIdNo: z.string().min(1, "Project Identification number is required"),
  year: z.string().min(4, "Project year is required"),
  assetTypes: z.array(z.string()).min(1, "Select at least one asset type"),
});

export type projectCreateData = z.infer<typeof createProjectSchema>;
