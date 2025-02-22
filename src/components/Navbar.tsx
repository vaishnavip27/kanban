"use client";

import { Link } from "react-router-dom";
import { LayoutDashboard, Trello, Users, Search, Bell, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { getAuth, signOut } from "firebase/auth";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Trello, label: "Project", path: "/project" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Navbar() {
  const auth = getAuth();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/"; // Redirect to homepage or login page
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="h-screen w-64 bg-[#121216] text-white border-r border-gray-800 overflow-hidden">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
      </div>
      <nav className="p-3">
        {sidebarItems.map((item) => (
          <div key={item.label} className="relative ">
            <Link
              to={item.path}
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
        <Button className="custom-get-started-button mt-80" onClick={handleLogout}>Logout</Button>
      </nav>
    </div>
  );
}
