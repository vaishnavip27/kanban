import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Earth from "./ui/globe";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BentoGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const earthCardRef = useRef<HTMLDivElement>(null);
  const integrationCardRef = useRef<HTMLDivElement>(null);
  const analyticsCardRef = useRef<HTMLDivElement>(null);
  const performanceCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we have refs and GSAP is available
    if (!gridRef.current) return;

    const cards = [
      { ref: earthCardRef, x: -100 },
      { ref: integrationCardRef, x: 100 },
      { ref: analyticsCardRef, x: -100 },
      { ref: performanceCardRef, x: 100 }
    ];

    cards.forEach(({ ref, x }, index) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        {
          x,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2, // Stagger the animations
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: true,
            markers: false
          }
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className="flex items-center h-[660px] gap-3 px-52"
    >
      {/* Left flex */}
      <div className="w-3/4 flex flex-col gap-3">
        <div
          ref={earthCardRef}
          className="w-full h-[420px] overflow-hidden relative p-6 rounded-2xl 
          bg-white/5 backdrop-blur-md border border-white/10 
          hover:border-white/20 transition-all duration-300"
        >
          <Earth />
          <div className="absolute top-6 left-6 text-white">
            <h2 className="text-xl font-semibold">
              Real-Time Global Collaboration
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Collaborate seamlessly with teams across the globe. Stay connected
              and work together in real time, no matter where you are, ensuring
              everyone is always on the same page.
            </p>
          </div>
        </div>

        <div
          ref={integrationCardRef}
          className="relative w-full h-[226px] px-16 flex items-center rounded-2xl 
          bg-white/5 backdrop-blur-md border border-white/10 
          hover:border-white/20 transition-all duration-300"
        >
          <div className="border border-white/20 p-3 bg-white/5 backdrop-blur-md rounded-md">
            <img
              src="/google-calendar.png"
              alt="Integration Icon"
              width={70}
              height={70}
              className="rounded-md border-2 border-white/20"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-white text-xl font-semibold">
              Seamless Integrations with Your Favorite Tools
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Connect Aligno with your favorite tools to streamline workflows
              and boost productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Right flex */}
      <div className="w-1/2 h-[660px] flex flex-col items-center gap-3">
        <div
          ref={analyticsCardRef}
          className="w-full h-[232px] p-6 flex items-end gap-4 rounded-2xl 
          bg-white/5 backdrop-blur-md border border-white/10 
          hover:border-white/20 transition-all duration-300"
        >
          <div className="w-14 h-20 bg-gradient-to-b from-purple-400/70 to-purple-600/70 rounded-full"></div>
          <div className="w-14 h-36 bg-gradient-to-b from-purple-400/70 to-purple-600/70 rounded-full"></div>
          <div className="w-14 h-28 bg-gradient-to-b from-purple-400/70 to-purple-600/70 rounded-full"></div>
          <div>
            <h2 className="text-white text-lg font-semibold">
              Advanced Analytics
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Unlock valuable insights into project performance, helping you
              make data-driven decisions with ease.
            </p>
          </div>
        </div>

        {/* Lightning Fast Performance */}
        <div
          ref={performanceCardRef}
          className="w-full h-[426px] p-6 flex flex-col justify-between rounded-2xl 
          bg-white/5 backdrop-blur-md border border-white/10 
          hover:border-white/20 transition-all duration-300"
        >
          <h2 className="text-white text-xl font-semibold">
            Lightning Fast Performance
          </h2>
          <p className="text-gray-400 text-sm">
            Experience blazing fast performance with cutting-edge technology
            optimized for speed and efficiency.
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/lightning.svg"
              alt="Lightning Icon"
              width={230}
              height={230}
              className="opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;