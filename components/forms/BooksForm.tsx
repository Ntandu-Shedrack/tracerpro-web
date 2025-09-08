/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";
import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type BooksFormMode = "create" | "update";

interface BooksFormProps {
  mode: BooksFormMode;
  schema: z.ZodType<any, any>;
  onSubmitHandler: (values: any) => Promise<void>;
  assetTypes: { label: string; value: string }[];
}

export const BooksForm = ({
  mode,
  schema,
  assetTypes,
  onSubmitHandler,
}: BooksFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      assetCategory: assetTypes[0]?.value ?? "",
      barcode: "",
      isbnNumber: "",
      title: "",
      author: "",
      yearOfPublication: "",
      acquisitionDate: undefined,
      price: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      await onSubmitHandler(data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            {mode === "create" ? "Create Book" : "Update Book"}
          </h2>

          {/* Asset Category */}
          {mode === "create" && (
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

          {/* Book Type */}
          {mode === "create" && (
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Book">Book</SelectItem>
                        <SelectItem value="Audio">Audio</SelectItem>
                        <SelectItem value="E-Book">E-Book</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Barcode */}
          <FormField
            control={form.control}
            name="barcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Barcode</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Barcode"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ISBN Number */}
          <FormField
            control={form.control}
            name="isbnNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book ISBN Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter ISBN Number"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Book Title"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Author */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Author</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Book Author"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Year of Publication */}
          <FormField
            control={form.control}
            name="yearOfPublication"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Publication</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Year of Publication"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Acquisition Date */}
          <FormField
            control={form.control}
            name="acquisitionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Acquisition</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {field.value
                          ? new Date(field.value).toLocaleDateString()
                          : "Pick a date"}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Unit Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Unit Price"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Condition */}
          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Good">Good</SelectItem>
                      <SelectItem value="Bad">Bad</SelectItem>
                      <SelectItem value="Out of Use">Out of Use</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Home Library */}
          <FormField
            control={form.control}
            name="homeLibrary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home Library</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Book Author"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            {isLoading
              ? mode === "create"
                ? "Creating Book..."
                : "Saving Changes..."
              : mode === "create"
              ? "Create Book"
              : "Save Changes"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
