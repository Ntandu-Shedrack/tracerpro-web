/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loginUser } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { signInSchema } from "@/types/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { z } from "zod";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      await loginUser(data);
      toast.success("Logged in successful");
      router.push("/dashboard/home");
    } catch (error: any) {
      const errorMessage =
        error?.message ||
        (typeof error === "string" ? error : "Login failed. Please try again.");
      toast.error(`Login Failed: ${errorMessage}`);
    }
  };

  return (
    <div className="container">
      <AuthForm
        mode="signin"
        schema={signInSchema}
        onSubmitHandler={onSubmit}
      />
    </div>
  );
}
