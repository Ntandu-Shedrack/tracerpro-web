"use client";

import React from "react";
import {
  LogOut,
  Settings,
  User,
  Home,
  BriefcaseBusiness,
  Warehouse,
  NotebookPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const groupMap: Record<string, { label: string; icon: any }> = {
  home: { label: "Dashboard", icon: Home },
  project: { label: "Projects", icon: BriefcaseBusiness },
  projects: { label: "Projects", icon: BriefcaseBusiness },
  inventory: { label: "Inventory Management", icon: Warehouse },
  stock: { label: "Stock Management", icon: NotebookPen },
};

const SIDEBAR_WIDTH_EXPANDED = 250; // same as expanded sidebar
const SIDEBAR_WIDTH_COLLAPSED = 48; // match --sidebar-width-icon

const Navbar: React.FC = () => {
  const { state, isMobile } = useSidebar();

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) segments.push("home");

  const breadcrumbs = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    let label = segment.replace(/-/g, " ");
    if (idx === 0 && groupMap[segment]) label = groupMap[segment].label;
    return { label, href, segment };
  });

  // Determine the sidebar width based on state
  let sidebarWidth = 0;
  if (!isMobile) {
    sidebarWidth =
      state === "expanded" ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;
  }

  const width = `calc(100% - ${sidebarWidth}px)`;

  return (
    <nav
      className="fixed top-0 right-0 z-10 h-16 flex items-center justify-between px-4 bg-background/80 backdrop-blur transition-all duration-200 ease-in-out"
      style={{ width }}
    >
      {/* Left: Sidebar trigger + breadcrumbs */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        {/* breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, i) => {
              const isFirst = i === 0;
              const isLast = i === breadcrumbs.length - 1;
              const Icon =
                isFirst && groupMap[crumb.segment]
                  ? groupMap[crumb.segment].icon
                  : null;

              return (
                <React.Fragment key={i}>
                  <BreadcrumbItem>
                    {!isLast ? (
                      <BreadcrumbLink asChild>
                        <Link
                          href={crumb.href}
                          className="capitalize flex items-center gap-1"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          {crumb.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="capitalize flex items-center gap-1">
                        {Icon && <Icon className="w-4 h-4" />}
                        {crumb.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right: user dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut
              className="h-4 w-4 mr-2"
              onSelect={() => {
                // handle logout
                console.log("Logging out...");
              }}
            />{" "}
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
