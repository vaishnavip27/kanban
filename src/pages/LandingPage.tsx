  import LandingNav from "@/components/LandingNav";


  const LandingPage = () => {

    return <div className="bg-[#090B0D] h-screen relative">
      <div className="flex flex-col items-center">
      <img src="/lightbeam.svg" alt="bg-image" className="absolute inset-0 translate-x-[-50%] translate-y-[-40%] top-1/2 left-1/2"/>
      </div>

      {/* Content Overlays */}
      <div className="flex flex-col items-center relative justify-center z-10">
        <LandingNav/>
      </div>
      </div>

  }

  export default LandingPage;