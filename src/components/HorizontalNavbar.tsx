"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Board", href: "#notes" },
  { name: "List", href: "#calendar" },
  { name: "Table", href: "#plans" },
  { name: "Timeline", href: "#activity" },
];

export function HorizontalNavbar() {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <nav className="bg-[#1A1C1E] p-1 rounded-lg h-11 flex items-center">
      <ul className="flex justify-center items-center gap-2 w-full">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary h-8 flex items-center",
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
