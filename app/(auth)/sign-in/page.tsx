"use client";

import { loginUser } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { signInSchema } from "@/types/auth";
import { useRouter } from "next/navigation";
import type { z } from "zod";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const result = await loginUser(data);
      // Optionally handle result (e.g., show error if login fails)
      router.push("/dashboard");
    } catch (error) {
      // Handle error (e.g., show notification)
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthForm mode="signin" schema={signInSchema} onSubmitHandler={onSubmit} />
  );
}
