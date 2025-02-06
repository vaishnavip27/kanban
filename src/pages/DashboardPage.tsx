import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MoveLeft,
  Search,
  Bell,
  Plus,
  Flag,
  LayoutGrid,
  Clock,
  CalendarDays,
  Video,
} from "lucide-react";
import { MessageCircle, X } from "lucide-react";
import ChatBox from "@/components/ChatBox";
import { ProjectTable } from "@/components/ProjectTable";
import { TaskLineChart } from "@/components/LineChart";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const DashboardPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const buttonRef = useRef(null);
  const dragStartXRef = useRef(0);

  const handleStart = (clientX) => {
    setIsDragging(true);
    dragStartXRef.current = clientX - position;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const maxPosition = buttonWidth - 48; // slider width
    const newPosition = Math.max(
      0,
      Math.min(clientX - dragStartXRef.current, maxPosition)
    );
    setPosition(newPosition);

    if (newPosition >= maxPosition * 0.9) {
      setPosition(maxPosition);
      setIsDragging(false);
      console.log("Joined!");
    }
  };

  const handleEnd = () => {
    if (isDragging) {
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const maxPosition = buttonWidth - 48;
      if (position < maxPosition * 0.9) {
        setPosition(0);
      }
      setIsDragging(false);
    }
  };

  // Touch Events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  const percentComplete =
    (position / (buttonRef.current?.offsetWidth - 48 || 1)) * 100;

  return (
    <div className="flex h-screen bg-[#0B0B0E] overflow-x-hidden ">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <header className="p-3 border-b border-gray-800 px-6 bg-[#121216]">
          <div className="flex items-center justify-between">
            <MoveLeft className="h-5 w-5" />
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 bg-[#121416] p-2 rounded-lg border border-white/10">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-gray-400 outline-none"
                />
              </div>
              <div className="border border-gray-800 p-2 rounded-sm">
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 overflow-y-auto text-gray-300 ">
          <div className="border border-gray-800 p-2.5 w-full flex items-center mb-4 bg-[#121216] rounded-md">
            <div className="border-r border-dashed border-gray-800 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">34</span>
            </div>
            <div className="border-r border-dashed border-gray-800 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">34</span>
            </div>
            <div className="border-r border-dashed border-gray-800 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">55</span>
            </div>
            <div className="border-r border-dashed border-gray-800 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">12</span>
            </div>
            <div className="border-r border-dashed border-gray-800 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">67</span>
            </div>
          </div>

          <div className="border border-gray-800 grid grid-cols-4 w-full p-4 gap-4">
            {/* First Row - 4 Boxes */}
            <div className="h-80 rounded-xl p-5 bg-[#121216] border border-gray-800">
              <div className="bg-black border border-gray-800 h-44 rounded-lg mb-2"></div>
              <div className="flex flex-col">
                <span className="font-medium mb-1">New Task</span>
                <p className="text-xs mb-3">
                  Involves creating and assigning a new task{" "}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    className="custom-get-started-button"
                    style={{ width: "130px", height: "37px" }}
                  >
                    + Add new task
                  </Button>
                  <Button
                    className="border border-gray-700"
                    style={{ height: "38px" }}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-xl bg-[#121216] border border-gray-800 px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-base">Tasks</div>
                <div className="flex items-center gap-1">
                  <Checkbox />
                  <label
                    htmlFor="completed-checkbox"
                    className="text-xs text-gray-300"
                  >
                    Marked as completed
                  </label>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-xl bg-[#121216] border border-gray-800 px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-base">Upcoming</div>
                <div className="flex gap-2">
                  <Search size="18" />
                  <LayoutGrid size="18" />
                </div>
              </div>
            </div>

            {/* fourth box */}
            <div className="h-80 rounded-xl p-4 bg-[#121216] border border-gray-800 px-4 py-4">
              <div className="flex items-center justify-between mb-2">
                {/* Left Side: Chat Icon + Text */}
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span className="text-base font-medium">Chat details</span>
                </div>

                {/* Right Side: Close Icon */}
                <X size={20} />
              </div>
              <ChatBox />
            </div>

            {/* Second Row - 3 Boxes (Using col-span-4 to keep the row layout) */}
            <div className=" col-span-4 grid grid-cols-[1fr_2fr_1fr] gap-4 ">
              {/* First Box - Square */}
              <div className="border border-gray-800 rounded-xl h-80 bg-[#121216] px-4 py-4">
                <div className="border border-white">
                  <span className="text-xs mb-2 text-[#818CF8]">
                    System Design
                  </span>
                  <div className="flex items-center justify-between mb-3">
                    <div>Team meeting</div>
                    <Button className="h-8 bg-transparent">
                      <Plus />
                      <span className="font-normal text-xs">New</span>
                    </Button>
                  </div>
                  <div className="bg-black p-2 rounded-xl">
                    <div className="flex -space-x-7 mb-2">
                      <Avatar>
                        <AvatarImage
                          src="/profile.png"
                          alt="User 1"
                          className="h-8 w-8"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="/profile.png"
                          alt="User 2"
                          className="h-8 w-8"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="/profile.png"
                          alt="User 3"
                          className="h-8 w-8"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="/profile.png"
                          alt="User 4"
                          className="h-8 w-8"
                        />
                      </Avatar>
                    </div>

                    <div className="flex gap-4 text-gray-300 text-sm justify-between mb-6">
                      <div className="flex items-center justify-between gap-2">
                        <div className="bg-slate-800 p-1.5 rounded-md">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs">
                            Duration
                          </span>
                          <span className="text-xs">45 mint</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="bg-slate-800 p-1.5 rounded-md">
                          <CalendarDays className="w-4 h-4 " />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs">Date</span>
                          <span className="text-xs">27 Sep, 2024</span>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={buttonRef}
                      className="relative w-full max-w-xs h-10 bg-gray-800 rounded-full overflow-hidden touch-none select-none"
                    >
                      {/* Track */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                        Swipe to join
                      </div>

                      {/* Progress background */}
                      <div
                        className="absolute inset-0 bg-green-500/10 transition-all duration-150"
                        style={{ width: `${percentComplete}%` }}
                      />

                      {/* Draggable thumb */}
                      <div
                        className={`absolute top-2 left-2 h-8  bg-gray-700 rounded-full flex items-center justify-center 
                        ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                        style={{
                          transform: `translateX(${position}px)`,
                          transition: isDragging ? "none" : "all 0.3s ease",
                        }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        <Video className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Box - Wider */}
              <div className="border border-gray-800 w-full rounded-xl py-4 px-4 h-80 bg-[#121216]">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-lg">Recent Task</div>
                  <div className="flex items-center gap-2">
                    <Search size="20" />
                    <Button className="px-3 h-8 text-xs font-normal rounded-xl">
                      All Time
                    </Button>
                    <Button className="px-3 h-8 text-xs font-normal rounded-xl">
                      Weekly
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-5">
                  <span className="bg-gray-800 px-2 py-1 rounded-xl text-xs">
                    +5%
                  </span>
                  <span className="text-xs">Work grew in the last week</span>
                </div>

                <div className="flex items-center justify-between">
                  <Button className="h-7 px-4 text-xs font-normal rounded-xl">
                    All
                  </Button>
                  <Button
                    className="custom-get-started-button"
                    style={{ width: "80px", height: "28px", fontSize: "12px" }}
                  >
                    Export
                  </Button>
                </div>
                <ProjectTable />
              </div>

              {/* Third Box - Square */}
              <div className="border border-gray-800 h-80 rounded-xl bg-[#121216] text-gray-200 px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Button className="flex items-center gap-1 bg-gray-800 h-8 text-xs font-normal">
                      <Plus />
                      Workers
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-1.5 rounded-md">
                    <Flag size="16" />
                  </div>
                </div>

                {/* line chart */}
                <div>
                  <TaskLineChart />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
