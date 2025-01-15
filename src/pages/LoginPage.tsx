'use client'

import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Trello } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LoginPageProps {
  onLogin: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication for now
    onLogin()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090B0D] px-4">
      <div className="flex flex-col items-center space-y-4 w-full max-w-[480px]">
        <Card className="w-full space-y-8 border border-white py-16 px-9 bg-transparent">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-start">
              <Trello className="w-12 h-12 text-indigo-500" />
            </div>
            <CardTitle className="mt-6 text-3xl font-bold text-white">Welcome back</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-400">
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-400">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox 
                    id="remember-me" 
                    className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </Label>
                </div>
                <div className="text-sm">
                  <Link to="#" className="text-indigo-500 hover:text-indigo-400">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
        <p className="mt-2 text-sm text-gray-400">
          Don't have an account?{' '}
          <span
            onClick={() => navigate("/signup")} // Use navigate to programmatically redirect
            className="text-indigo-500 hover:text-indigo-400 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginPage

