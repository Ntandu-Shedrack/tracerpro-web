/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { resetPasswordSchema } from "@/types/auth";

export default function PasswordResetPage() {
  const onSubmit = async (data: any) => {
    console.log("Password reset data:", data);
  };

  return (
    <AuthForm
      mode="reset-password"
      schema={resetPasswordSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
