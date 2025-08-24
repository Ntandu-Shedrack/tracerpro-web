"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { sidebarLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import logo from "@/components/icons/logosaas.png";
import { Button } from "../ui/button";

export const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  // Auto-collapse on medium screens (tablet & below)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-50 h-full shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out transform bg-white",
        collapsed ? "w-[4.5rem]" : "w-64"
      )}
    >
      <div className="flex-1 flex flex-col">
        {/* Logo & collapse toggle */}
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="TracerPro Logo"
              height={40}
              width={40}
              className="object-contain"
            />
            {!collapsed && (
              <span className="inline-flex text-lg px-4 py-1.5 rounded-xl border border-white/20">
                TracerPro
              </span>
            )}
          </div>
          <button
            onClick={toggleCollapse}
            className="hidden lg:block p-1 hover:bg-gray-100 rounded"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Links */}
        <nav className="mt-6 flex flex-col gap-4 px-2">
          {sidebarLinks.map(({ label, icon: Icon, href, badge, dot }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "group relative flex items-center transition-all rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-black/80 text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  collapsed && "justify-center"
                )}
              >
                <Icon className="w-5 h-5" />
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
        {!collapsed && (
          <Image
            src="/icons/avatar.svg"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        {!collapsed && (
          <div className="flex flex-col text-sm">
            <span className="font-medium text-black">Richard</span>
            <span className="text-gray-500 text-xs">9394lay@gmail.com</span>
          </div>
        )}
        <Button variant="outline">
          <Link href="/sign-in" className="text-center">
            <LogOut size={16} />
          </Link>
        </Button>
      </div>
    </aside>
  );
};
