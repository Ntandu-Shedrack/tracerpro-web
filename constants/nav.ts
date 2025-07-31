import {
  Home,
  Calendar,
  MessageCircle,
  Inbox,
  BarChart2,
  FileText,
  Settings,
} from "lucide-react";

export const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Schedules", href: "/schedules", icon: Calendar },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageCircle,
    dot: true,
    badge: 3,
  },
  { label: "Inbox", href: "/inbox", icon: Inbox },
  { label: "Analytics", href: "/analytics", icon: BarChart2 },
  { label: "News", href: "/news", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];
