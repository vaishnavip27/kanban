"use client";

import {
  LayoutDashboard,
  Trello,
  Calendar,
  Users,
  Search,
  Bell,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Trello, label: "Kanban", href: "/kanban" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-[#17191A] text-white border-r border-gray-800">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
      </div>
      <nav className="p-3">
        {sidebarItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-2 p-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
