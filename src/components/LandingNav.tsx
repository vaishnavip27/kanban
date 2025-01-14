import { Button } from "./ui/button"

const LandingNav = () =>{
  return (
    <div className="flex items-center justify-between border border-white p-1 rounded-full mt-6 px-7">
        <div className="font-bold text-2xl">
            Taskflow
        </div>
        <div className="ml-32 flex items-center gap-4">
            <div>Pricing</div>
            <div>Community</div>
            <div>About</div>
        </div>
        <div className="ml-80">
            <Button className="rounded-full transparent border border-white">Get started</Button>
        </div>
    </div>
  )
}

export default LandingNav