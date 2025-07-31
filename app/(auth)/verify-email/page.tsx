/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { verifyEmailSchema } from "@/types/auth";

export default function VerifyEmailPage() {
  const onSubmit = async (data: any) => {
    console.log("Verify email data:", data);
  };

  return (
    <AuthForm
      mode="verify-email"
      schema={verifyEmailSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
