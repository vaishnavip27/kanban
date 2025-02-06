import { Button } from "@/components/ui/button";
import {
  MoveLeft,
  Search,
  Bell,
  Plus,
  Flag,
  LayoutGrid,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { MessageCircle, X } from "lucide-react";
import ChatBox from "@/components/ChatBox";
import { ProjectTable } from "@/components/ProjectTable";
import { TaskLineChart } from "@/components/LineChart";
import { Checkbox } from "@/components/ui/checkbox";
import VideoComponent from "@/components/VideoComponent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const DashboardPage = () => {
  const attendees = [
    { name: "Farhat", color: "bg-rose-100 text-rose-700" },
    { name: "Jill", color: "bg-green-100 text-green-700" },
    { id: "+4", isCount: true },
  ];

  const tags = [
    { color: "bg-blue-500" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
  ];
  return (
    <div className="flex h-screen bg-[#0B0B0E] overflow-x-hidden ">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <header className="p-3 border-b border-gray-800/80 px-6 bg-[#121216]">
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
              <div className="border border-gray-800/80 p-2 rounded-sm">
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 overflow-y-auto text-gray-300 ">
          <div className="border border-gray-800/80 p-2.5 w-full flex items-center mb-4 bg-[#121216] rounded-md">
            <div className="border-r border-dashed border-gray-800/80 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">34</span>
            </div>
            <div className="border-r border-dashed border-gray-800/80 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">34</span>
            </div>
            <div className="border-r border-dashed border-gray-800/80 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">55</span>
            </div>
            <div className="border-r border-dashed border-gray-800/80 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">12</span>
            </div>
            <div className="border-r border-dashed border-gray-800/80 aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
              <span>Title</span>
              <span className="text-3xl">67</span>
            </div>
          </div>

          <div className="border border-gray-800 grid grid-cols-4 w-full p-4 gap-4">
            {/* First Row - 4 Boxes */}
            <div className="h-80 rounded-xl p-5 bg-[#121216] border border-gray-800/80">
              <div className="bg-black border border-gray-800/80 h-44 rounded-lg mb-2 overflow-hidden object-cover">
                <img
                  src="/gradient.png"
                  alt="gradient"
                  className="h-56 w-full"
                />
              </div>
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
                    className="border border-gray-800/80"
                    style={{ height: "38px" }}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-xl bg-[#121216] border border-gray-800/80 px-4 py-4 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
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
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-7 mb-2 mt-2">
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
                </div>
                <div className="flex items-center gap-1 mb-2 text-gray-300">
                  <Plus size="23" />
                  <span className="text-sm">New mate</span>
                </div>
              </div>
              <div className="w-full h-72 overflow-hidden rounded-lg relative">
                <img
                  src="/component.png"
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="h-80 rounded-xl bg-[#121216] border border-gray-800/80 px-4 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-base">Upcoming</div>
                <div className="flex gap-2">
                  <Search size="18" />
                  <LayoutGrid size="18" />
                </div>
              </div>
              <div className="bg-black px-5 py-3 rounded-lg max-w-md">
                <h2 className="text-white text-md font-semibold mb-4">
                  Branch meeting
                </h2>

                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Team</p>
                  <div className="flex gap-1">
                    {attendees.map((attendee, index) => (
                      <div
                        key={index}
                        className={`flex items-center ${
                          attendee.isCount
                            ? "px-2 py-1 bg-gray-700 text-gray-300"
                            : `${attendee.color} px-2.5 py-1`
                        } rounded-full text-xs`}
                      >
                        {!attendee.isCount && (
                          <>
                            <span className="mr-2">{attendee.name}</span>
                            <X size={14} className="cursor-pointer" />
                          </>
                        )}
                        {attendee.isCount && attendee.id}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Date</p>
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2.5 rounded-lg">
                    <span className="text-white text-xs">25th Sep, 2024</span>
                    <div className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-gray-400" />
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Tags</p>
                  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className={`w-5 h-5 ${tag.color} rounded-full`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* fourth box */}
            <div className="h-80 rounded-xl p-4 bg-[#121216] border border-gray-800/80 px-4 py-4">
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
              <div className="border border-gray-800/80 rounded-xl h-80 bg-[#121216] px-4 py-4 overflow-hidden flex flex-col">
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

                {/* videocomponent */}
                <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100%-80px)] scrollbar-hide">
                  <VideoComponent />
                  <VideoComponent />
                </div>
              </div>

              {/* Middle Box - Wider */}
              <div className="border border-gray-800/80 w-full rounded-xl py-4 px-4 h-80 bg-[#121216]">
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
                  <span className="bg-gray-800/80 px-2 py-1 rounded-xl text-xs">
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
              <div className="border border-gray-800/80 h-80 rounded-xl bg-[#121216] text-gray-200 px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Button className="flex items-center gap-1 bg-gray-800 h-8 text-xs font-normal">
                      <Plus />
                      Workers
                    </Button>
                  </div>
                  <div className="bg-gray-800/80 p-1.5 rounded-md">
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
