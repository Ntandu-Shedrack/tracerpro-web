"use server";

import AppSidebar from "@/components/sections/AppSidebar";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/sections/Navbar";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <div className="flex flex-col min-h-screen">
      <>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            <div className="px-4">{children}</div>
          </main>
        </SidebarProvider>
      </>
      <Toaster position="top-right" />
    </div>
  );
}
