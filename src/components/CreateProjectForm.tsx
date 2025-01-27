"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CreateProjectFormProps {
  onSubmit: (project: { name: string; description: string; deadline: string }) => void
  onCancel: () => void
}

export default function CreateProjectForm({ onSubmit, onCancel }: CreateProjectFormProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, description, deadline })
    setName("")
    setDescription("")
    setDeadline("")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#121216] rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h3 className="text-2xl font-light text-white">New Project</h3>
          <Button variant="ghost" size="icon" onClick={onCancel} className="text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">
              Project Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#0B0B0E] border-gray-800 text-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-200">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="bg-[#0B0B0E] border-gray-800 text-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline" className="text-gray-200">
              Deadline
            </Label>
            <Input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="bg-[#0B0B0E] border-gray-800 text-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={onCancel} className="border-gray-700 text-gray-300 hover:bg-[#1A1A1F]">
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
              Create Project
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

