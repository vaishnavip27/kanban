"use client";

import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full mx-auto lg:px-2 py-3.5 backdrop-blur-sm font-medium">
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Navigation items with equal spacing */}
        <div className="flex-1 flex items-center justify-around">
          <Link
            to="/features"
            className="text-md text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            to="/why-taskflow"
            className="text-md text-gray-300 hover:text-white transition-colors"
          >
            Why Taskflow?
          </Link>

          {/* Logo in the middle */}
          <Link to="/" className="font-bold text-xl sm:text-2xl text-white">
           <img src="/icon.png" width={24} height={24}/>
          </Link>

          <Link
            to="/pricing"
            className="text-md text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Button
            className="w-36 bg-white text-black rounded-xl"
            onClick={() => navigate("/signup")}
          >
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;