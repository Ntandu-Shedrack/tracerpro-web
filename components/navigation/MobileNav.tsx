"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 shadow rounded-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={toggle}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 bg-white shadow-lg border-r w-64 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>
    </>
  );
};
