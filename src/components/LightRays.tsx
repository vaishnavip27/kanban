"use client";
import { Spotlight, GridBackground } from "../components/spotlight-new";

export function LightRays() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
    </div>
  );
}
