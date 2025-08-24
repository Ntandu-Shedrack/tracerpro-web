import React from "react";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <div className="w-full md:w-2/3 flex items-center justify-center">
        {children}
      </div>
      <div className="w-1/3 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_70%)] hidden md:flex items-center justify-center"></div>
      <Toaster position="top-right" />
    </main>
  );
}
