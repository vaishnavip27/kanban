"use client"

import React, { useState } from 'react'
import { X, Image, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (task: { title: string; description?: string; labels?: string[]; image?: string }) => void
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [labelInput, setLabelInput] = useState('')
  const [labels, setLabels] = useState<string[]>([])
  const [image, setImage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onSubmit({
      title: title.trim(),
      description: description.trim() || undefined,
      labels: labels.length > 0 ? labels : undefined,
      image: image || undefined,
    })

    setTitle('')
    setDescription('')
    setLabels([])
    setImage('')
  }

  const handleAddLabel = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && labelInput.trim()) {
      e.preventDefault()
      setLabels([...labels, labelInput.trim()])
      setLabelInput('')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1C1E] text-gray-400">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              className="bg-[#1A1C1E] text-fray-400"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="description">Description</Label>
            <Textarea
            className="bg-[#1A1C1E] text-fray-400"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full bg-[#1A1C1E]"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Image className="w-4 h-4 mr-2" />
                Choose Image
              </Button>
              <input
              className="bg-[#1A1C1E] text-gray-400 hidden"
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            {image && (
              <div className="relative mt-2">
                <img
                  src={image}
                  alt="Task preview"
                  className="w-full h-40 object-cover rounded-md"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => setImage('')}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="labels">Labels</Label>
            <div className="flex items-center space-x-2">
              <Input
                className="bg-[#1A1C1E] text-gray-400 "
                id="labels"
                value={labelInput}
                onChange={(e) => setLabelInput(e.target.value)}
                onKeyDown={handleAddLabel}
                placeholder="Press Enter to add labels"
              />
              <Button
              className="bg-[#1A1C1E] text-gray-400 "
                type="button"
                size="icon"
                variant="outline"
                onClick={() => {
                  if (labelInput.trim()) {
                    setLabels([...labels, labelInput.trim()])
                    setLabelInput('')
                  }
                }}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {labels.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {labels.map((label, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-2 py-1 text-sm flex items-center space-x-1"
                  >
                    <span>{label}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 rounded-full"
                      onClick={() => setLabels(labels.filter((_, i) => i !== index))}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Task</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal

