"use client";

import { AssetImportForm } from "@/components/forms/AssetImportForm";
import { z } from "zod";

const assetSchema = z.object({
  assetCategory: z.string().nonempty("Please select a category"),
  file: z.instanceof(File, { message: "Please upload a CSV file" }),
});

export default function ImportPage() {
  return (
    <AssetImportForm
      mode="import"
      schema={assetSchema}
      assetTypes={[{ label: "ICT Asset", value: "ict" }]}
      onSubmitHandler={async (values) => {
        console.log("Importing:", values);
        // API call here
      }}
      createNewBaseHref="/ict-assets/new"
    />
  );
}
