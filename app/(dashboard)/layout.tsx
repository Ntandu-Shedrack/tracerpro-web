"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <div className="flex flex-1 w-full">
        <main
          className="
            flex-1
            transition-all duration-300 ease-in-out
            min-h-screen
            px-4 py-6
            ml-0
            md:ml-[4.5rem]
            lg:ml-64
          "
        >
          {children}
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
