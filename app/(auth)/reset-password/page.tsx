"use client";

import { resetPassword } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { resetPasswordSchema } from "@/types/auth";
import type { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PasswordResetPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    try {
      await resetPassword(
        Array.isArray(data.verificationCode)
          ? data.verificationCode[0]
          : data.verificationCode,
        data.password
      );
      toast.success("Password reset successfully");
      router.push("/sign-in");
    } catch (error) {
      const errorMessage =
        (error instanceof Error && error.message) ||
        (typeof error === "string"
          ? error
          : "Password reset failed. Please try again.");
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <AuthForm
      mode="reset-password"
      schema={resetPasswordSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
