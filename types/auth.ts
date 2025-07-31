import { z } from "zod";

// ----------------------------
// Shared AuthForm types
// ----------------------------

export type AuthFormMode = "signin" | "signup";

// ----------------------------
// Zod schemas for SignIn/SignUp
// ----------------------------

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Min 8 characters")
    .regex(/[a-z]/, "Include lowercase letter")
    .regex(/[A-Z]/, "Include uppercase letter")
    .regex(/\d/, "Include number")
    .regex(/[^A-Za-z0-9]/, "Include special character"),
});

export type SignInData = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().regex(/^\d{10,15}$/, "Enter a valid phone number"),
    password: z
      .string()
      .min(8, "Min 8 characters")
      .regex(/[a-z]/, "Include lowercase")
      .regex(/[A-Z]/, "Include uppercase")
      .regex(/\d/, "Include number")
      .regex(/[^A-Za-z0-9]/, "Include special character"),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      message: "You must accept the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpData = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email"),
});

export type VerifyEmailData = z.infer<typeof verifyEmailSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Min 8 characters")
      .regex(/[a-z]/, "Include lowercase letter")
      .regex(/[A-Z]/, "Include uppercase letter")
      .regex(/\d/, "Include number")
      .regex(/[^A-Za-z0-9]/, "Include special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
