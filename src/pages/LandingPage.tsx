import LandingNav from "@/components/LandingNav";

const LandingPage = () => {
  return <div className="bg-[#090B0D] h-screen relative">
    <div className="flex flex-col items-center">
    <img src="/lightbeam.svg" alt="bg-image" className="absolute inset-0 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"/>
    </div>

    {/* Content Overlays */}
    <div className="flex flex-col items-center relative z-10">
      <LandingNav/>
        <h1 className="text-white text-4xl font-bold">Welcome to the Landing Page</h1>
        <p className="text-gray-300 mt-4 text-lg">
          This content will appear over the background image.
        </p>
    </div>
    </div>

}

export default LandingPage;