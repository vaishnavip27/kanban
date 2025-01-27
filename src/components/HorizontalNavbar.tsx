"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "List", href: "#notes" },
  { name: "Timeline", href: "#activity" },
  { name: "Calendar", href: "#calendar" },
];

export function HorizontalNavbar({
  activeView,
  setActiveView,
}: {
  activeView: string;
  setActiveView: (view: string) => void;
}) {
  return (
    <nav className="bg-[#17171c] p-1 rounded-lg h-11 flex items-center">
      <ul className="flex justify-center items-center gap-2 w-full">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary h-8 flex items-center",
                activeView === item.name
                  ? "bg-gray-700 text-white"
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveView(item.name)}
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
