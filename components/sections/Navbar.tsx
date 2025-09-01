"use client";

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
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Map first path segment -> group label & icon
const groupMap: Record<string, { label: string; icon: any }> = {
  home: { label: "Dashboard", icon: Home },
  project: { label: "Projects", icon: BriefcaseBusiness },
  projects: { label: "Projects", icon: BriefcaseBusiness },
  inventory: { label: "Inventory Management", icon: Warehouse },
  stock: { label: "Stock Management", icon: NotebookPen },
};

const Navbar = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    segments.push("home");
  }

  const breadcrumbs = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    let label = segment.replace(/-/g, " ");

    if (idx === 0 && groupMap[segment]) {
      label = groupMap[segment].label;
    }

    return { label, href, segment };
  });

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 backdrop-blur-xs z-10 border-b">
      {/* Left side: Sidebar + Breadcrumbs */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

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
                <BreadcrumbItem key={i}>
                  {!isLast ? (
                    <>
                      <BreadcrumbLink asChild>
                        <Link
                          href={crumb.href}
                          className="capitalize flex items-center gap-1"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          {crumb.label}
                        </Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  ) : (
                    <BreadcrumbPage className="capitalize flex items-center gap-1">
                      {Icon && <Icon className="w-4 h-4" />}
                      {crumb.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right side: User Dropdown */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
