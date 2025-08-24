/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { verifyEmail } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { verifyEmailSchema } from "@/types/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { z } from "zod";

export default function VerifyEmailPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof verifyEmailSchema>) => {
    try {
      const code = data.verificationCode.join("");
      await verifyEmail(code);
      toast.success("Verification Succeeded");
      router.push("/reset-password");
    } catch (error: any) {
      const errorMessage =
        error?.message ||
        (typeof error === "string"
          ? error
          : "Verification failed. Please try again.");
      toast.error(`Verification Failed: ${errorMessage}`);
    }
  };

  return (
    <AuthForm
      mode="verify-email"
      schema={verifyEmailSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
