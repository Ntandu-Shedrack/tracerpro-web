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
    <div className="flex min-h-screen">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 px-2 py-4 mt-8">{children}</main>
          <footer className="px-4 py-4 ml-auto">
            <div className="container mx-auto">
              <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Shedrack Ntandu. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </SidebarProvider>
      <Toaster position="top-right" />
    </div>
  );
}
