/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "../ui/checkbox";
// import { Label } from "../ui/label";

export type ProjectFormMode = "create" | "update";

interface ProjectFormProps {
  mode: ProjectFormMode;
  schema: z.ZodType<any, any>;
  onSubmitHandler: (values: any) => Promise<void>;
}

export const ProjectForm = ({
  mode,
  schema,
  onSubmitHandler,
}: ProjectFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
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

  // const assetOptions = [
  //   { id: "furniture", label: "Furniture" },
  //   { id: "ict", label: "ICT Assets" },
  //   { id: "books", label: "Books" },
  //   { id: "others", label: "Others" },
  // ];

  return (
    <div className="flex flex-col w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">
          {mode === "create" ? "Create New Project" : "Update Project"}
        </h2>

        {/* Project Name */}
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Enter project name"
            disabled={isLoading}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* Project ID */}
        <div>
          <Input
            id="projectIdNo"
            type="text"
            placeholder="Enter project ID"
            disabled={isLoading}
            {...register("projectIdNo")}
          />
          {errors.projectIdNo && (
            <p className="text-sm text-red-500">
              {errors.projectIdNo.message as string}
            </p>
          )}
        </div>

        {/* Project Year */}
        <div>
          <Input
            id="year"
            type="text"
            placeholder="Enter project year"
            disabled={isLoading}
            {...register("year")}
          />
          {errors.year && (
            <p className="text-sm text-red-500">
              {errors.year.message as string}
            </p>
          )}
        </div>

        {/* {mode === "create" && (
          <div className="space-y-3 text-left">
            <Label className="text-sm font-medium">Project Asset Types</Label>

            <Controller
              name="assetTypes"
              control={control}
              render={({ field }) => {
                const { value = [], onChange } = field;

                const toggleValue = (id: string) => {
                  if (value.includes(id)) {
                    onChange(value.filter((v: string) => v !== id));
                  } else {
                    onChange([...value, id]);
                  }
                };

                return (
                  <div className="grid grid-cols-2 gap-4">
                    {assetOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={option.id}
                          checked={value.includes(option.id)}
                          onCheckedChange={() => toggleValue(option.id)}
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-normal"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                );
              }}
            />

            {errors.assetTypes && (
              <p className="text-sm text-red-500">
                {errors.assetTypes.message as string}
              </p>
            )}
          </div>
        )} */}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          {isLoading
            ? mode === "create"
              ? "Creating Project..."
              : "Saving Changes..."
            : mode === "create"
            ? "Create Project"
            : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};
