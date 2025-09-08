"use client";

import { ArrowRight, Menu as MenuIcon } from "lucide-react";
import logo from "@/components/icons/logosaas.png";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Announcement Bar */}
      <div className="w-full bg-black text-white py-2 px-3 text-sm flex items-center justify-center gap-2">
        <p className="hidden md:inline-flex text-white/60">
          Streamline your inventory management and boost your productivity
        </p>
        <div className="flex items-center gap-1">
          <a href="/sign-up" className="hover:text-white/70 transition">
            Get Started for Free
          </a>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="py-5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src={logo}
              alt="TracerPro Logo"
              height={40}
              width={40}
              className="object-contain"
            />

            {/* Desktop Navigation (unchanged) */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a href="/about" className="hover:text-black transition">
                About
              </a>
              <a href="/features" className="hover:text-black transition">
                Features
              </a>
              <a href="/contact" className="hover:text-black transition">
                Contact
              </a>
              <a href="/help" className="hover:text-black transition">
                Help
              </a>
              <a
                href="/sign-up"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition font-medium"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu using shadcn */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button aria-label="Open menu">
                    <MenuIcon className="w-6 h-6 text-black" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white shadow-lg rounded-md py-2"
                >
                  <DropdownMenuItem asChild>
                    <a
                      href="/about"
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      About
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/features"
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Features
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/contact"
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Contact
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/help"
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Help
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/sign-up"
                      className="block w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition font-medium"
                    >
                      Get Started
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
