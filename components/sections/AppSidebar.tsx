"use client";

import {
  Home,
  Calendar,
  Settings,
  User2,
  ChevronUp,
  Plus,
  ChevronDown,
  BellIcon,
  BriefcaseBusiness,
  Monitor,
  Book,
  Armchair,
  FileBarChart2,
  Warehouse,
  NotebookPen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import logoImage from "@/components/icons/logosaas.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ProjectForm } from "../forms/ProjectForm";
import { createProjectSchema } from "@/types/project";

const dashboardItems = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: Home,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: BellIcon,
  },
  {
    title: "Calendar",
    url: "/dashboard",
    icon: Calendar,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: FileBarChart2,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const projectItems = [
  {
    title: "2023/24 Financial Year",
    url: "/projects",
    icon: BriefcaseBusiness,
    subtitle: [
      { title: "Furniture", icon: Armchair },
      { title: "ICT Assets", icon: Monitor },
      { title: "Books", icon: Book },
    ],
  },
  {
    title: "2024/25 Financial Year",
    url: "/projects",
    icon: BriefcaseBusiness,
    subtitle: [
      { title: "Furniture", icon: Armchair },
      { title: "ICT Assets", icon: Monitor },
      { title: "Books", icon: Book },
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="overflow-x-clip">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src={logoImage} alt="logo" width={25} height={25} />
                <span className="bg-[linear-gradient(to_right,#3639F3FF,#D34DD8FF,#FF7ADEFF,#71C2EF,#3BFFFF,#2A07C7FF)] [background-size:200%] text-transparent bg-clip-text text-xl tracking-wider font-semibold">
                  TracerPro App
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent>
        {/* Dashboard Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="text-[#6578BDFF]" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Messages" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>

          {/* Dialog wraps trigger + content */}
          <Dialog>
            <DialogTrigger asChild>
              <SidebarGroupAction>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Project</span>
              </SidebarGroupAction>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader hidden>
                <DialogTitle hidden>Create New Project</DialogTitle>
                <DialogDescription hidden>
                  Fill in the details below to create a new project.
                </DialogDescription>
              </DialogHeader>

              <ProjectForm
                mode="create"
                schema={createProjectSchema}
                onSubmitHandler={async (values) => {
                  console.log("Project submitted:", values);
                }}
              />
            </DialogContent>
          </Dialog>

          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Collapsible defaultOpen={false}>
                    {/* Project Button */}
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="group">
                        <item.icon className="text-[#6578BDFF]" />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {/* Submenu (assets) */}
                    <CollapsibleContent>
                      <ul className="ml-6 mt-2 space-y-1">
                        {item.subtitle.map((sub, i) => (
                          <li key={i}>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                  <Link
                                    href={`${item.url}/${sub.title
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    <sub.icon className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground ml-2">
                                      {sub.title}
                                    </span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Inventory Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* Project Button */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <Warehouse className="text-[#6578BDFF]" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Stock Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* Project Button */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <NotebookPen className="text-[#6578BDFF]" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="group px-2 py-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <User2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-sm font-medium">John Doe</span>
                      <span className="text-xs text-muted-foreground">
                        john.doe@company.com
                      </span>
                    </div>
                  </div>
                  {/* Chevron with rotation */}
                  <ChevronUp className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-50">
                <DropdownMenuLabel className="font-medium">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
