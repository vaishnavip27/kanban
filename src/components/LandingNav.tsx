import { Button } from "./ui/button"
import {Link, useNavigate} from "react-router-dom";
import "../index.css"

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between w-full mx-auto px-10 py-3 ">
      <div className="flex items-center">
        <Link to="/" className="font-bold text-2xl text-white">
          Taskflow
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-sm text-gray-300 hover:text-white transition-colors rounded-full bg-transparent " onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button className="custom-get-started-button">
          Get started
        </Button>
      </div>
    </nav>
  )
}

export default LandingNav

