import React from "react";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      {children}
      <Toaster position="top-right" />
    </main>
  );
}
