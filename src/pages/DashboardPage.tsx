
import { Button } from "@/components/ui/button";
import { MoveLeft, Search, Bell } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-[#0B0B0E] overflow-x-hidden">

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

        <main className="flex-1 p-5 overflow-y-auto">
            <div className="border border-white p-2.5 w-full flex items-center mb-4">
              <div className="border-r border-dashed border-white aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
                <span>Title</span>
                <span className="text-3xl">34</span>
              </div>
              <div className="border-r border-dashed border-white aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
                <span>Title</span>
                <span className="text-3xl">34</span>
              </div>
              <div className="border-r border-dashed border-white aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
                <span>Title</span>
                <span className="text-3xl">55</span>
              </div>
              <div className="border-r border-dashed border-white aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
                <span>Title</span>
                <span className="text-3xl">12</span>
              </div>
              <div className="border-r border-dashed border-white aspect-auto flex-1 px-3 py-2.5 flex items-left flex-col gap-4">
                <span>Title</span>
                <span className="text-3xl">67</span>
              </div>
            </div>


            <div className="border border-white grid grid-cols-4 w-full p-4 gap-4">
            {/* First Row - 4 Boxes */}
              <div className="border border-white h-80 rounded-xl p-5 bg-[#27292B]">
                <div className="bg-black border border-white h-40 rounded-lg mb-3"></div>
                <div className="flex flex-col">
                  <span className="font-medium mb-1">New Task</span>
                  <p className="text-xs mb-4">Involves creating and assigning a new task </p>
                  <div className="flex items-center gap-2">
                    <Button className="custom-get-started-button" style={{width:"130px"}}>+ Add new task</Button>
                    <Button className="border border-gray-700">Learn more</Button>
                  </div>
                </div>
              </div>
              <div className="border border-white h-80 rounded-xl bg-[#27292B]"></div>
              <div className="border border-white h-80 rounded-xl"></div>
              <div className="border border-white h-80 rounded-xl"></div>

            {/* Second Row - 3 Boxes (Using col-span-4 to keep the row layout) */}
            <div className="border border-gray-600  col-span-4 grid grid-cols-[1fr_2fr_1fr] gap-4">
            {/* First Box - Square */}
            <div className="border border-gray-600 aspect-square rounded-xl"></div>

            {/* Middle Box - Wider */}
            <div className="border border-gray-600 w-full rounded-xl"></div>

            {/* Third Box - Square */}
            <div className="border border-gray-600 aspect-square rounded-xl"></div>
            </div>
            </div>

        </main>
        </div>
    </div>
  )
}

export default DashboardPage;