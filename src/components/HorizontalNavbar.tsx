"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Notes", href: "#notes" },
  { name: "Calendar", href: "#calendar" },
  { name: "Plans", href: "#plans" },
  { name: "Activity", href: "#activity" },
  { name: "Report", href: "#report" },
];

export function HorizontalNavbar() {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <nav className="bg-gray-800 p-1 rounded-lg h-12 flex items-center">
      <ul className="flex justify-center items-center gap-2 w-full">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary h-9 flex items-center",
                activeItem === item.name
                  ? "bg-gray-700 text-white"
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
