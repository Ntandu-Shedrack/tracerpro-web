"use server";

import { Toaster } from "react-hot-toast";
export default async function RootPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
