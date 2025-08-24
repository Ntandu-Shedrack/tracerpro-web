/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/actions/user.actions";
import { AuthForm } from "@/components/forms/AuthForm";
import { signUpSchema } from "@/types/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
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
    <div className="flex min-h-screen items-center justify-center">
      <AuthForm
        mode="signup"
        schema={signUpSchema}
        onSubmitHandler={onSubmit}
      />
    </div>
  );
}
