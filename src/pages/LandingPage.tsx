import { useState, useEffect } from "react";
import LandingNav from "@/components/LandingNav";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    // Simulate a loading progress that increases over time
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          // Start exit animation when progress reaches 100%
          setExitAnimation(true);
          // Set a timeout to actually change the page after animation completes
          setTimeout(() => {
            setLoading(false);
          }, 800); // Animation duration
          return 100;
        }
        return prevProgress + 5; // Increase by 5% each time
      });
    }, 100); // Update every 100ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className={`text-center transition-all duration-800 ease-in-out ${exitAnimation ? "transform -translate-y-20 opacity-0" : ""}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-br from-[#bea2ff] to-[#F4EDFF] bg-clip-text text-transparent italic">
            TaskFlow
          </h2>
          <div className="mt-4 relative">
            <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-1 bg-[#5B21B6] rounded-full transition-all duration-100 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Title component for ContainerScroll
  const TitleComponent = (
    <div className="flex flex-col items-center mb-8">
      <h1 className="z-10 bg-gradient-to-br from-[#bea2ff] to-[#F4EDFF] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm md:text-7xl">
        <div className="flex flex-col items-center">
          <div>Streamline Your Workflow</div>
          <div className="flex gap-5">
            <div>with</div>
            <div>Ease</div>
          </div>
        </div>
      </h1>
      <p className="text-center text-[#F4EDFF] text-wrap:balance md:text-xl pt-4 font-normal">
        Effortless task management for every team
      </p>
    </div>
  );
  
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Nav is fixed at the top */}
      <LandingNav />
      
      <div className="flex flex-col items-center">
        <img
          src="/lightbeam.svg"
          alt="bg-image"
          className="absolute inset-0 translate-x-[-50%] translate-y-[-40%] top-1/2 left-1/2 z-0"
        />
      </div>

      {/* Twitter link section */}
      <div className="flex justify-center pt-20 z-10 relative">
        <a
          href="https://x.com/vai_shhh27"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-purple-200 bg-opacity-80 px-7 py-2 transition-colors hover:bg-purple-300 hover:bg-opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            className="h-5 w-5 text-purple-800"
          >
            <path
              fill="currentColor"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            ></path>
          </svg>
          <p className="text-sm font-semibold text-purple-800">
            Introducing TaskFlow
          </p>
        </a>
      </div>

      {/* Container Scroll Animation */}
      <ContainerScroll titleComponent={TitleComponent}>
        <div className="flex items-center justify-center h-full w-full">
          <img
            src="/main-image.png"
            alt="TaskFlow Dashboard"
            className="w-full h-full object-contain"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default LandingPage;