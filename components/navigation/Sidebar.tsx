"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sidebarLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-white border-r shadow-sm flex flex-col justify-between transition-all duration-300",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex-1 flex flex-col">
          {/* Logo and Collapse */}
          <div className="flex items-center justify-between px-4 py-5 border-b">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="eSSACO"
                width={30}
                height={30}
              />
              {!collapsed && (
                <span className="text-lg font-semibold text-black">eSSACO</span>
              )}
            </div>
            <button
              onClick={toggleCollapse}
              className="hidden md:block p-1 hover:bg-gray-100 rounded"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>

          {/* Links */}
          <nav className="mt-4 flex flex-col gap-1 px-2">
            {sidebarLinks.map(({ label, icon: Icon, href, badge, dot }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "group relative flex items-center transition-all rounded-lg px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon className="w-5 h-5" />

                  {/* Visible label if expanded */}
                  {!collapsed && (
                    <>
                      <span className="ml-3 flex-1">{label}</span>
                      {dot && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                      {badge && (
                        <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                          {badge}
                        </span>
                      )}
                    </>
                  )}

                  {/* Tooltip-like label on hover if collapsed */}
                  {collapsed && (
                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 z-50 shadow-lg transition-opacity duration-200">
                      {label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User footer */}
        <div className="border-t p-4 flex items-center gap-3">
          <Image
            src="/icons/avatar.svg"
            alt="User"
            width={collapsed ? 30 : 40}
            height={collapsed ? 30 : 40}
            className="rounded-full"
          />
          {!collapsed && (
            <div className="flex flex-col text-sm">
              <span className="font-medium text-black">Richard</span>
              <span className="text-gray-500 text-xs">9394lay@gmail.com</span>
            </div>
          )}
          <button className="ml-auto text-gray-500 hover:text-red-500">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
    </>
  );
};
