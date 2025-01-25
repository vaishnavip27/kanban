  import LandingNav from "@/components/LandingNav";


  const LandingPage = () => {

    return <div className="h-screen relative">
      <div className="flex flex-col items-center">
      <img src="/lightbeam.svg" alt="bg-image" className="absolute inset-0 translate-x-[-50%] translate-y-[-40%] top-1/2 left-1/2"/>
      </div>

      {/* Content Overlays */}
      <div className="flex flex-col items-center relative justify-center z-10">
        <LandingNav/>

        <div className="flex justify-center mt-20">
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
            <path
              fill="currentColor"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            ></path>
          </svg>
          <p className="text-sm font-semibold text-purple-800">
            Introducing TaskFlow
          </p>
        </a>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <h1 className="z-10 bg-gradient-to-br from-[#bea2ff] to-[#F4EDFF] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm md:text-7xl">
          <div className="flex flex-col items-center">
            <div>Streamline Your Workflow</div>
            <div className="flex gap-5">
            <div>with</div>
            <div>Ease</div>
            </div>
          </div>
        </h1>
        <p className="text-center text-[#F4EDFF] text-wrap:balance md:text-xl pt-4 font-normal">
        Effortless task management for every team
        </p>
      </div>

      <div>
        <img src="/main-image.png" alt="landing-img" className="max-w-6xl mt-28 rounded-md"/>
      </div>


      </div>
      </div>

  }

  export default LandingPage;