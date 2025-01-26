import { useState } from "react"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "../index.css"

const LandingNav = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl sm:text-2xl text-white">
            Taskflow
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-sm text-gray-300 hover:text-white transition-colors rounded-full bg-transparent"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button className="custom-get-started-button">Get started</Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900 bg-opacity-95 backdrop-blur-sm py-2 px-4">
          <div className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              className="text-sm text-gray-300 hover:text-white transition-colors rounded-full bg-transparent w-full text-left"
              onClick={() => {
                navigate("/login")
                toggleMenu()
              }}
            >
              Login
            </Button>
            <Button className="custom-get-started-button w-full" onClick={toggleMenu}>
              Get started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default LandingNav

