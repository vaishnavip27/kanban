  import LandingNav from "@/components/LandingNav";


  const LandingPage = () => {

    return <div className="bg-[#090B0D] h-screen relative">
      <div className="flex flex-col items-center">
      <img src="/lightbeam.svg" alt="bg-image" className="absolute inset-0 translate-x-[-50%] translate-y-[-40%] top-1/2 left-1/2"/>
      </div>

      {/* Content Overlays */}
      <div className="flex flex-col items-center relative justify-center z-10">
        <LandingNav/>


        {/* //the middle section */}
        <div className="flex flex-col items-center justify-center transform translate-y-36">
          <h1 className="header-font text-6xl">This is the middle part</h1>
          <span>Thsi is the subheading</span>
        </div>
      </div>
      </div>

  }

  export default LandingPage;