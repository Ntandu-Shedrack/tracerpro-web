"use client";

import { Menu as MenuIcon } from "lucide-react";
import logo from "@/components/icons/logosaas.png";
import Image from "next/image";

export const HeaderNav = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Navigation Bar */}
      <div className="py-5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/home">
              <Image
                src={logo}
                alt="TracerPro Logo"
                height={40}
                width={40}
                className="object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              {/* Features with Submenu */}
              <div className="relative group">
                <a
                  href="/inventory"
                  className="hover:text-black transition flex items-center gap-1"
                >
                  Inventory
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-30">
                  <a
                    href="/inventory"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    In Store
                  </a>
                  <a
                    href="/stock-taking"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Stock Taking
                  </a>
                </div>
              </div>
              <a href="/messages" className="hover:text-black transition">
                Messages
              </a>
              <a href="/about" className="hover:text-black transition">
                Reports
              </a>
              <a href="/help" className="hover:text-black transition">
                Settings
              </a>
            </nav>

            {/* Mobile Menu Icon */}
            <MenuIcon className="w-6 h-6 text-black md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
