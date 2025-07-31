import { MobileNav } from "@/components/navigation/MobileNav";
import { Sidebar } from "@/components/navigation/Sidebar";
import React from "react";

export default function MainPage() {
  return (
    <div>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <MobileNav />
      </nav>
    </div>
  );
}
