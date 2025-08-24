"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { forgotPasswordSchema } from "@/types/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import type { z } from "zod";
import { requestPasswordReset } from "@/actions/user.actions";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    try {
      await requestPasswordReset(data.email);
      toast.success("Reset code sent successfully");
      router.push("/verify-email");
    } catch (error) {
      const errorMessage =
        (error instanceof Error && error.message) ||
        (typeof error === "string"
          ? error
          : "Reset request failed. Please try again.");
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <AuthForm
      mode="forgot-password"
      schema={forgotPasswordSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
