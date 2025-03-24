"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import LandingNav from "@/components/LandingNav";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import TaskManagementSection from "../components/AnimatedTask";
import BentoGrid from "@/components/BentoGrid";
import FeatureComparison from "@/components/WhyTaskflow";
import PricingSection from "@/components/PricingSection";
import Footer from "../components/footer";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setExitAnimation(true);
          setTimeout(() => {
            setLoading(false);
          }, 800);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#060B1F] overflow-hidden">
        <div
          className={`text-center transition-all duration-800 ease-in-out ${
            exitAnimation ? "transform -translate-y-20 opacity-0" : ""
          }`}
        >
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

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <LandingNav />

      <div className="flex-grow flex justify-center flex-col pt-44 z-10 relative">
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
            <path fill="currentColor" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07"></path>
          </svg>
          <p className="text-sm font-semibold text-purple-800">Introducing TaskFlow</p>
        </a>
        <div className="flex flex-col items-center mb-9">
          <h1 className="z-10 bg-gradient-to-br from-[#bea2ff] to-[#F4EDFF] bg-clip-text text-center font-display text-4xl font-semibold tracking-[-0.05em] text-transparent md:text-9xl">
            <div className="flex flex-col items-center">
              <div>Taskflow</div>
            </div>
          </h1>
          <p className="text-center text-[#F4EDFF] text-wrap:balance md:text-2xl pt-4 font-normal mb-10">
            Streamline your Workflow with Ease
          </p>
          <button className="flex justify-center items-center bg-purple-600 py-3 px-20 text-sm text-center border border-white rounded-full">
            Login
          </button>
        </div>
      </div>

      <div className="relative -mt-72 z-0">
        <div className="absolute top-52 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500 opacity-30 blur-3xl rounded-full z-0"></div>
        <ContainerScroll>
          <div className="relative flex items-center justify-center h-[560px] w-full">
            <img
              src="/main-image.png"
              alt="TaskFlow Dashboard"
              className="w-full h-[560px] object-cover relative z-10"
            />
          </div>
        </ContainerScroll>
        <div className="absolute bottom-72 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-700 opacity-25 blur-3xl rounded-full z-20"></div>
        <div className="relative flex justify-center z-[5] ">
          <div className="w-full max-w-6xl mx-auto px-4 relative">
            <Marquee speed={40} gradient={false} direction="left" className="py-4 -mt-64">
              <div className="flex items-center space-x-8 text-[#F4EDFF] font-medium text-xl px-4">
                <span>Trusted by 2 million+ teams</span>
                <span className="text-purple-400">•</span>
                <span>Streamline your tasks</span>
                <span className="text-purple-400">•</span>
                <span>Boost productivity</span>
                <span className="text-purple-400">•</span>
                <span>Seamless collaboration</span>
                <span className="text-purple-400">•</span>
                <span>Smart task management</span>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <TaskManagementSection />

      <BentoGrid />

      <FeatureComparison />

      <PricingSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
