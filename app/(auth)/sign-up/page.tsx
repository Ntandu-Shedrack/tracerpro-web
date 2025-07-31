"use client";

import { registerUser } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { signUpSchema } from "@/types/auth";
import { useRouter } from "next/router";
import { z } from "zod";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      const result = await registerUser(data);
      // Optionally handle result (e.g., show error if login fails)
      router.push("/dashboard");
    } catch (error) {
      // Handle error (e.g., show notification)
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <AuthForm
        mode="signup"
        schema={signUpSchema}
        onSubmitHandler={onSubmit}
      />
    </div>
  );
}
