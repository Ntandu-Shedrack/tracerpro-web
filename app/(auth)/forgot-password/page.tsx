/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { forgotPasswordSchema } from "@/types/auth";

export default function ForgotPasswordPage() {
  const onSubmit = async (data: any) => {
    console.log("Forgot password data:", data);
  };

  return (
    <AuthForm
      mode="forgot-password"
      schema={forgotPasswordSchema}
      onSubmitHandler={onSubmit}
    />
  );
}
