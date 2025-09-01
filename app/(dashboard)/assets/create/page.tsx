/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/actions/user.actions";
import { AssetForm } from "@/components/forms/AssetsForm";
import { createProjectSchema } from "@/types/project";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";

export default function AssetCreatePage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof createProjectSchema>) => {
    try {
      await registerUser(data);
      toast.success("Account created successful!");
      router.push("/home");
    } catch (error: any) {
      const errorMessage =
        error?.message ||
        (typeof error === "string"
          ? error
          : "Registration failed. Please try again.");
      toast.error(`Registration Failed: ${errorMessage}`);
    }
  };

  return (
    <section className="flex min-h-screen">
      <AssetForm
        mode="create"
        schema={createProjectSchema}
        onSubmitHandler={onSubmit}
      />
    </section>
  );
}
