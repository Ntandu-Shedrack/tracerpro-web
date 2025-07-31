/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export type AuthFormMode =
  | "signin"
  | "signup"
  | "forgot-password"
  | "verify-email"
  | "reset-password";

interface AuthFormProps {
  mode: AuthFormMode;
  schema: z.ZodType<any, any>;
  onSubmitHandler: (values: any) => Promise<void>;
  social?: boolean;
}

export const AuthForm = ({
  mode,
  schema,
  onSubmitHandler,
  social = true,
}: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      await onSubmitHandler(data);
      toast.success(
        mode === "forgot-password"
          ? "Password reset link sent!"
          : mode === "verify-email"
          ? "Verification email sent!"
          : mode === "reset-password"
          ? "Password reset successfully!"
          : `${
              mode === "signin" ? "Signed in" : "Account created"
            } successfully!`
      );
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 h-screen w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {mode === "signin"
              ? "Welcome Back!"
              : mode === "signup"
              ? "Create Account"
              : mode === "forgot-password"
              ? "Forgot Password"
              : mode === "verify-email"
              ? "Verify Email"
              : "Reset Password"}
          </h2>
          <p className="text-sm text-gray-500">
            {mode === "signin" && (
              <>
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </>
            )}
            {mode === "signup" && (
              <>
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </>
            )}
            {mode === "forgot-password" && (
              <>
                Enter the email you used to create your account so we can send
                you instructions on how to reset your password.{" "}
              </>
            )}
            {mode === "verify-email" && (
              <>
                We have sent an email with verification information to
                n****e@e***e.com.
              </>
            )}
            {mode === "reset-password" && (
              <>Choose a new password for your account </>
            )}
          </p>
        </div>

        {mode === "signup" && (
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First Name" {...register("firstName")} />
            <Input placeholder="Last Name" {...register("lastName")} />
          </div>
        )}

        {(mode === "signup" ||
          mode === "signin" ||
          mode === "forgot-password") && (
          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>
        )}

        {mode === "signup" && (
          <Input type="tel" placeholder="Phone Number" {...register("phone")} />
        )}

        {(mode === "signin" ||
          mode === "signup" ||
          mode === "reset-password") && (
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              aria-label="Toggle password visibility"
            >
              <Image
                src={
                  showPassword
                    ? "/icons/visibility-off.svg"
                    : "/icons/visibility-on.svg"
                }
                alt={showPassword ? "Hide password" : "Show password"}
                width={20}
                height={20}
              />
            </button>
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>
        )}

        {(mode === "signup" || mode === "reset-password") && (
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              aria-label="Toggle password visibility"
            >
              <Image
                src={
                  showPassword
                    ? "/icons/visibility-off.svg"
                    : "/icons/visibility-on.svg"
                }
                alt={showPassword ? "Hide password" : "Show password"}
                width={20}
                height={20}
              />
            </button>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message as string}
              </p>
            )}
          </div>
        )}

        {mode === "signup" && (
          <>
            <Controller
              control={control}
              name="terms"
              render={({ field }) => (
                <div className="flex items-center space-x-2 text-sm">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="terms">
                    I agree to TracerPro{" "}
                    <Link href="#" className="underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline">
                      Privacy
                    </Link>
                  </Label>
                </div>
              )}
            />
            {errors.terms && (
              <p className="text-sm text-red-500">
                {errors.terms.message as string}
              </p>
            )}
          </>
        )}

        {mode === "signin" && (
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          {isLoading
            ? mode === "signin"
              ? "Signing In..."
              : mode === "signup"
              ? "Creating Account..."
              : mode === "forgot-password"
              ? "Sending Link..."
              : mode === "verify-email"
              ? "Verifying Email..."
              : mode === "reset-password"
              ? "Resetting Password..."
              : "Submitting"
            : mode === "signin"
            ? "Sign In"
            : mode === "signup"
            ? "Create Account"
            : mode === "forgot-password"
            ? "Send Reset Link"
            : mode === "verify-email"
            ? "Resend Email"
            : mode === "reset-password"
            ? "Reset Password"
            : "Submit"}
        </Button>

        {(mode === "forgot-password" || mode === "verify-email") && (
          <Button variant={"outline"} className="w-full">
            <Link href="/sign-in" className="w-full text-center">
              Back to Sign In
            </Link>
          </Button>
        )}

        {social &&
          mode !== "forgot-password" &&
          mode !== "verify-email" &&
          mode !== "reset-password" && (
            <>
              <div className="flex items-center gap-2">
                <div className="h-px bg-gray-300 flex-1" />
                <span className="text-sm text-gray-500">or</span>
                <div className="h-px bg-gray-300 flex-1" />
              </div>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Image
                  src="/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Image
                  src="/icons/apple.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
                Continue with Apple
              </Button>
            </>
          )}
      </form>
    </div>
  );
};
