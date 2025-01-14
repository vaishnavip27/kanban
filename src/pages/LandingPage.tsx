import LandingNav from "@/components/LandingNav";
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

const LandingPage = () => {
  return <div className="bg-[#090B0D] h-screen relative">
    <div className="flex flex-col items-center">
    <img src="/lightbeam.svg" alt="bg-image" className="absolute inset-0 translate-x-[-50%] translate-y-[-40%] top-1/2 left-1/2"/>
    </div>

    {/* Content Overlays */}
    <div className="flex flex-col items-center relative justify-center z-10">
      <LandingNav/>
        <div className="mt-36 flex flex-col items-center justify-center">
        <Button className="custom-get-started-button" style={{borderRadius:'28px', height:"38px"}}>
            <Sparkles className="h-8 w-8"/>
            <span>New Task</span>
        </Button>
        <h1 className="text-white text-4xl font-bold">Welcome to the Landing Page</h1>
        <p className="text-gray-300 mt-4 text-lg">
          This content will appear over the background image.
        </p>
        <Button>Launch App</Button>
        </div>
    </div>
    </div>

}

export default LandingPage;