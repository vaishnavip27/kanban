'use client'

import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Trello, Github, Chrome } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/board');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090B0D] px-4">
      <div className="flex flex-col items-center space-y-4 w-full max-w-[430px]">
        {/* Glow effects */}
        <div className="absolute w-[450px] h-[480px] rounded-full bg-purple-500/20 blur-[120px] translate-x-1/4 -z-100" />
        
        <Card className="w-full space-y-5 border border-white/10 py-8 px-9 bg-black/20 backdrop-blur-xl relative overflow-hidden shadow-[0_0_1000px_0_rgba(79,70,229,0.1)] hover:shadow-[0_0_1000px_0_rgba(79,70,229,0.15)] transition-all duration-300">
          {/* Corner glows */}
          <div className="absolute -top-20 -right-14 w-44 h-44 bg-indigo-500/20 blur-[32px]" />
          <div className="absolute bottom-0 -left-28 w-40 h-44 bg-indigo-500/20 blur-[32px]" />
          
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-start">
              <Trello className="w-9 h-9 text-indigo-500" />
            </div>
            <CardTitle className="pt-1 text-3xl font-bold text-white">Welcome back!</CardTitle>
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
                  className="block w-full py-3.5 border border-gray-600/30 rounded-lg leading-5 bg-black/50 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email address"
                  required
                />
              </div>
              <Button
                type="submit"
                className="custom-get-started-button" style={{height:"44px"}}
              >
                Sign in
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-gray-400">OR</span>
                </div>
              </div>

              <div className="flex gap-2 w-full max-w-md mx-auto pb-9">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-1/2 h-12 text-gray-200 hover:text-gray-100 bg-black/20 backdrop-blur-md border-gray-600/30 hover:bg-white/5 transition-all duration-300"
                >
                  <Chrome className="w-5 h-5" />
                  Sign up with Google
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-1/2 h-12 text-gray-200 hover:text-gray-100 bg-black/20 backdrop-blur-md border-gray-600/30 hover:bg-white/5 transition-all duration-300"
                >
                  <Github className="w-5 h-5 " />
                  Sign up with GitHub
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <p className="mt-2 text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/signup" className="text-indigo-500 hover:text-indigo-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage