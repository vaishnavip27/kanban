
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


            <div className="border border-white grid grid-cols-2 w-full p-4 gap-4">
                <div className="border border-white h-64"></div>
                <div className="border border-white h-64"></div>
                <div className="border border-white h-64"></div>
                <div className="border border-white h-64"></div>
            </div>

        </main>
        </div>
    </div>
  )
}

export default DashboardPage;