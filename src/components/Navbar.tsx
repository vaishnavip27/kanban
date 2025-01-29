"use client";

import { Link } from "react-router-dom";
import { LayoutDashboard, Trello, Calendar, Users, Search, Bell, Settings } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Trello, label: "Project", href: "/project" },
  { icon: Calendar, label: "Kanban", href: "/kanban" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Navbar() {
  return (
    <div className="h-screen w-64 bg-[#121216] text-white border-r border-gray-800 overflow-hidden">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
      </div>
      <nav className="p-3">
        {sidebarItems.map((item) => (
          <div key={item.label} className="relative">
            <Link
              to={item.href}
              className="relative flex items-center space-x-2 p-2.5 rounded-lg text-gray-400 hover:bg-gray-900/50 hover:text-white transition-colors group"
            >
              <div className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-gray-900/50 rounded-lg transition-colors z-0"></div>
              <div className="relative z-20 flex items-center space-x-4">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
