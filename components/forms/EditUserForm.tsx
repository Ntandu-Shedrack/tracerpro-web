/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { EditUserData, editUserSchema } from "@/types/auth";

// ---------- DUMMY USER DATA ----------
const dummyUser: EditUserData = {
  firstName: "Shedrack",
  lastName: "Ntandu",
  gender: "male",
  email: "josantashedrack@gmail.com",
  phone: "255689956145",
  password: "",
  confirmPassword: "",
  terms: true,
};

// ---------- COMPONENT ----------
export const EditUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditUserData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: dummyUser,
  });

  const onSubmit = async (data: EditUserData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("User details updated successfully!");
      console.log("Updated Data:", data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full mx-auto"
      >
        <h2 className="text-2xl font-bold mb-2">Update Account Details</h2>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input placeholder="First Name" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Last Name" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Gender */}
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <div>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-sm text-red-500">{errors.gender.message}</p>
              )}
            </div>
          )}
        />

        {/* Email */}
        <div>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Input type="tel" placeholder="Phone Number" {...register("phone")} />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <Input
            type="password"
            placeholder="New Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};
