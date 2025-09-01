/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, FieldValues, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type AssetFormMode = "create" | "update";

interface AssetFormProps {
  mode: AssetFormMode;
  schema: z.ZodType<any, any>;
  onSubmitHandler: (values: any) => Promise<void>;
}

export const AssetForm = ({
  mode,
  schema,
  onSubmitHandler,
}: AssetFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">
          {mode === "create" ? "Create New Asset" : "Update Asset"}
        </h2>

        {/* Assets Type */}

        {mode === "create" && (
          <div>
            <Controller
              control={control}
              name="asset"
              render={({ field }) => (
                <div>
                  <select
                    id="asset"
                    {...field}
                    className="bg-primary border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    <option value="">Select Asset Type</option>
                    <option value="furniture">Furniture</option>
                    <option value="ict_asset">ICT Asset</option>
                    <option value="books">Books</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.asset && (
                    <p className="text-sm text-red-500">
                      {errors.asset.message as string}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        )}

        {/* Asset code */}
        <div>
          <Input
            id="code"
            type="text"
            placeholder="Enter Asset Code"
            disabled={isLoading}
            {...register("code")}
          />
          {errors.code && (
            <p className="text-sm text-red-500">
              {errors.code.message as string}
            </p>
          )}
        </div>

        {/* Asset name */}
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Enter Asset Name"
            disabled={isLoading}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* Asset Description */}
        <div>
          <Input
            id="description"
            type="text"
            placeholder="Enter Asset Description"
            disabled={isLoading}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        {/* Asset Condition */}
        <div>
          <Controller
            control={control}
            name="condition"
            render={({ field }) => (
              <div>
                <select
                  id="condition"
                  {...field}
                  className="bg-primary border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="">Select Asset Condition</option>
                  <option value="good">Good</option>
                  <option value="bad">Bad</option>
                  <option value="out_of_use">Out of Use</option>
                </select>
                {errors.condition && (
                  <p className="text-sm text-red-500">
                    {errors.condition.message as string}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Unit Value */}
        <div>
          <Input
            id="unitValue"
            type="text"
            placeholder="Enter Unit Value ( Tsh )"
            disabled={isLoading}
            {...register("unitValue")}
          />
          {errors.unitValue && (
            <p className="text-sm text-red-500">
              {errors.unitValue.message as string}
            </p>
          )}
        </div>

        {/* Total Value */}
        <div>
          <Input
            id="totalValue"
            type="text"
            placeholder="Total Value - VAT Incl  ( Tsh )"
            disabled={isLoading}
            {...register("totalValue")}
          />
          {errors.totalValue && (
            <p className="text-sm text-red-500">
              {errors.totalValue.message as string}
            </p>
          )}
        </div>

        {/* Date of Purchase */}
        <div>
          <Input
            id="dateOfPurchase"
            type="date"
            placeholder="Date of Purchase"
            disabled={isLoading}
            {...register("dateOfPurchase")}
          />
          {errors.dateOfPurchase && (
            <p className="text-sm text-red-500">
              {errors.dateOfPurchase.message as string}
            </p>
          )}
        </div>

        {/* Invoice Number */}
        <div>
          <Input
            id="invoiceNumber"
            type="text"
            placeholder="Invoice Number"
            disabled={isLoading}
            {...register("invoiceNumber")}
          />
          {errors.invoiceNumber && (
            <p className="text-sm text-red-500">
              {errors.invoiceNumber.message as string}
            </p>
          )}
        </div>

        {/* Supplier */}
        <div>
          <Input
            id="supplier"
            type="text"
            placeholder="Asset Supplier"
            disabled={isLoading}
            {...register("supplier")}
          />
          {errors.supplier && (
            <p className="text-sm text-red-500">
              {errors.supplier.message as string}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          {isLoading
            ? mode === "create"
              ? "Creating Asset..."
              : "Saving Changes..."
            : mode === "create"
            ? "Create Asset"
            : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};
