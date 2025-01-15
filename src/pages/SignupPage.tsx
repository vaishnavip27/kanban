'use client'

import React, { useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trello } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/login')
  }

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setGlowPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
  }

  const handleButtonLeave = () => {
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090B0D] px-4">
      <div className="flex flex-col items-center space-y-4 w-full max-w-[464px]">
        <Card className="w-full space-y-6 border border-white py-16 px-9 bg-transparent relative">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-start">
              <Trello className="w-12 h-12 text-indigo-500" />
            </div>
            <CardTitle className="mt-6 text-3xl font-bold text-white">Create new account</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-md font-normal text-gray-400">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pr-3 py-4 border border-gray-600 rounded-sm leading-5 bg-black text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="relative group">
                {/* Outer glow layer */}
                <div 
                  className="absolute -inset-[6px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(1, 65, 255, 0.8), rgba(118, 15, 255, 0.6), transparent 70%)`,
                  }}
                ></div>
                
                {/* Button container */}
                <div className="relative">
                  <Button
                    ref={buttonRef}
                    type="submit"
                    className="w-full flex justify-center py-6 px-8 rounded-full text-sm font-medium relative overflow-hidden bg-[#0A0A0A] border border-[#1a1a1a] transition-all duration-300 group-hover:bg-[#0F0F0F]"
                    onMouseMove={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Primary glow effect */}
                    <div 
                      className="absolute w-40 h-40 bg-[#0141ff] rounded-full mix-blend-screen pointer-events-none transition-transform duration-300"
                      style={{
                        left: `${glowPosition.x}%`,
                        top: `${glowPosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(40px)',
                        opacity: 0.5,
                      }}
                    />
                    
                    {/* Secondary glow effect */}
                    <div 
                      className="absolute w-32 h-32 bg-[#760fff] rounded-full mix-blend-screen pointer-events-none transition-transform duration-300"
                      style={{
                        left: `${glowPosition.x}%`,
                        top: `${glowPosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(30px)',
                        opacity: 0.4,
                      }}
                    />
                    
                    {/* Center bright glow */}
                    <div 
                      className="absolute w-16 h-16 bg-white rounded-full mix-blend-screen pointer-events-none transition-transform duration-300"
                      style={{
                        left: `${glowPosition.x}%`,
                        top: `${glowPosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(15px)',
                        opacity: 0.2,
                      }}
                    />
                    
                    {/* Text with glow effect */}
                    <span className="relative z-10 text-white font-medium tracking-wider text-sm">
                      CREATE ACCOUNT
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <p className="mt-2 text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:text-indigo-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage

