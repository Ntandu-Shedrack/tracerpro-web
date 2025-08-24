"use client";

import { HeaderNav } from "@/components/sections/HeaderNav";
import { Toaster } from "react-hot-toast";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col min-h-screen">
      <HeaderNav />
      <main
        className="
            flex-1
            transition-all duration-300 ease-in-out
            ml-0
            md:ml-[4.5rem]
            lg:ml-64
          "
      >
        {children}
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
