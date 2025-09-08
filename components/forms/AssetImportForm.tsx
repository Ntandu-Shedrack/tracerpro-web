/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { Upload, File as FileIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AssetForm } from "./AssetForm";
import { createFurnitureSchema } from "@/types/furniture";
import { BooksForm } from "./BooksForm";
import { createBookSchema } from "@/types/books";
import { createIctSchema } from "@/types/ict";

export type AssetImportFormMode = "import" | "update";

interface AssetImportFormProps {
  mode: AssetImportFormMode;
  schema: z.ZodType<any, any>;
  onSubmitHandler: (values: any) => Promise<void>;
  assetTypes: { label: string; value: string }[];
  createNewBaseHref?: string; // base href like "/assets/new"
}

export const AssetImportForm = ({
  mode,
  schema,
  onSubmitHandler,
  assetTypes,
  createNewBaseHref = "/assets/new",
}: AssetImportFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      assetCategory: assetTypes[0]?.value ?? "",
      file: undefined,
    },
  });

  const selectedAssetValue = form.watch("assetCategory");

  const selectedAssetLabel =
    assetTypes.find((asset) => asset.value === selectedAssetValue)?.label ||
    "Assets";

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await onSubmitHandler(data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, field: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      field.onChange(file);
      setFilePreview(file);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full mx-auto p-6 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold">
            {mode === "import"
              ? `Import ${selectedAssetLabel}`
              : `Update ${selectedAssetLabel}`}
          </h2>

          {/* Asset Category */}
          {mode === "import" && (
            <FormField
              control={form.control}
              name="assetCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {assetTypes.map((asset) => (
                          <SelectItem key={asset.value} value={asset.value}>
                            {asset.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* File Upload */}
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload File (.csv)</FormLabel>
                <FormControl>
                  <Card
                    className="border-dashed border-2 border-muted-foreground/25 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, field)}
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop your CSV here, or click to browse
                    </p>
                    <input
                      id="fileInput"
                      type="file"
                      accept=".csv"
                      className="hidden"
                      disabled={isLoading}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                        setFilePreview(file || null);
                      }}
                    />
                  </Card>
                </FormControl>
                {filePreview && (
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <FileIcon className="h-4 w-4 text-primary" />
                    <span>{filePreview.name}</span>
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading
              ? mode === "import"
                ? `Importing ${selectedAssetLabel}...`
                : `Saving ${selectedAssetLabel}...`
              : mode === "import"
              ? `Import ${selectedAssetLabel}`
              : `Save ${selectedAssetLabel}`}
          </Button>

          {/* Or create new */}
          {createNewBaseHref && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="secondary">
                  + Create New {selectedAssetLabel}
                </Button>
              </DialogTrigger>

              <DialogContent className="max-auto max-h-[90vh] overflow-y-auto resize p-6">
                <DialogHeader hidden>
                  <DialogTitle>Create New {selectedAssetLabel}</DialogTitle>
                </DialogHeader>

                {/* Furniture */}
                {selectedAssetValue === "furniture" && (
                  <AssetForm
                    mode="create"
                    schema={createFurnitureSchema}
                    assetType="furniture"
                    onSubmitHandler={async (values) => {
                      console.log("Furniture submitted:", values);
                    }}
                  />
                )}

                {/* Books */}
                {selectedAssetValue === "books" && (
                  <BooksForm
                    mode="create"
                    schema={createBookSchema}
                    assetTypes={[{ label: "Books", value: "books" }]}
                    onSubmitHandler={async (values) => {
                      console.log("Books submitted:", values);
                    }}
                  />
                )}

                {/* ICT */}
                {selectedAssetValue === "ict" && (
                  <AssetForm
                    mode="create"
                    schema={createIctSchema}
                    assetType="ict"
                    onSubmitHandler={async (values) => {
                      console.log("ICT Assets submitted:", values);
                    }}
                  />
                )}
              </DialogContent>
            </Dialog>
          )}
        </form>
      </Form>
    </div>
  );
};
