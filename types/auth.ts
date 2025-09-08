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
  verificationCode: z
    .array(z.string().length(1, "Each digit required"))
    .length(5, "Code must be 5 digits"),
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
    verificationCode: z
      .array(z.string().length(1, "Each digit required"))
      .length(5, "Code must be 5 digits"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

export const editUserSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    gender: z.enum(["male", "female", "other"]),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    password: z.string().min(6, "Password must be at least 6 chars").optional(),
    confirmPassword: z.string().optional(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms",
    }),
  })
  .refine(
    (data) => {
      if (data.password || data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

export type EditUserData = z.infer<typeof editUserSchema>;
