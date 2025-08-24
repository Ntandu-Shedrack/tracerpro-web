import {
  Home,
  Archive,
  MessageCircle,
  Inbox,
  FileText,
  UserPen,
  Settings,
} from "lucide-react";

export const sidebarLinks = [
  { label: "Dashboard", href: "/home", icon: Home },
  { label: "Inventory", href: "/inventory", icon: Archive },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageCircle,
    dot: true,
    badge: 3,
  },
  { label: "Inbox", href: "/inbox", icon: Inbox },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Profile", href: "/profile", icon: UserPen },
  { label: "Settings", href: "/settings", icon: Settings },
];
