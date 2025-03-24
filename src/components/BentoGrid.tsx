import React from "react";
import Earth from "./ui/globe";

const BentoGrid: React.FC = () => {
  return (
    <div className="flex items-center h-[660px] gap-3 px-52">
      {/* Left flex */}
      <div className="w-3/4 flex flex-col gap-3">
        {/* Real-Time Global Collaboration */}
        <div className="w-full h-[420px] overflow-hidden relative p-6 rounded-md bg-[#131417]">
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

        {/* Seamless Integrations */}
        <div className="relative w-full h-[226px] p-6 flex items-center rounded-lg bg-[#131417] shadow-md border border-[#1e1f22]">
          {/* Icon */}
          <img
            src="/image.png" // Ensure this is correctly placed in public folder
            alt="Integration Icon"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="ml-4">
            <h2 className="text-white text-lg font-semibold">
              Seamless Integrations with Your Favorite Tools
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Connect Aligno with your favorite tools to streamline workflows
              and boost productivity.
            </p>
          </div>

          {/* Speech Bubble Icon */}
          <div className="absolute bottom-4 left-6 opacity-40">
            <img
              src="/speech-bubble.png"
              alt="Speech Bubble"
              width={30}
              height={30}
              className="blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Right flex */}
      <div className="w-1/2 h-[660px] flex flex-col items-center gap-3">
        {/* Advance Analytics */}
        <div className="w-full h-[232px] p-6 flex items-end gap-4 rounded-md bg-[#131417]">
          <div className="w-14 h-20 bg-gradient-to-b from-red-400 to-orange-600 rounded-full"></div>
          <div className="w-14 h-36 bg-gradient-to-b from-red-400 to-orange-600 rounded-full"></div>
          <div className="w-14 h-28 bg-gradient-to-b from-red-400 to-orange-600 rounded-full"></div>
          <div>
            <h2 className="text-white text-lg font-semibold">
              Advance Analytics
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Unlock valuable insights into project performance, helping you
              make data-driven decisions with ease.
            </p>
          </div>
        </div>

        {/* Lightning Fast Performance */}
        <div className="w-full h-[426px] p-6 flex flex-col justify-between rounded-md bg-[#131417]">
          <h2 className="text-white text-lg font-semibold">
            Lightning Fast Performance
          </h2>
          <p className="text-gray-400 text-sm">
            Experience blazing fast performance with cutting-edge technology
            optimized for speed and efficiency.
          </p>
          <div className="flex justify-center items-center mt-4">
            <img
              src="/lightning.svg"
              alt="Lightning Icon"
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;