"use client"

import React, { useState } from 'react'
import { X, User } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (task: { 
    title: string
    description?: string
    labels?: string[]
    images?: string[]
    attachments?: string[]
    people?: string[]
    dueDate?: string
    status?: string
    priority?: string
    createdBy?: string
  }) => void
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [labelInput, setLabelInput] = useState('')
  const [labels, setLabels] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [attachmentInput, setAttachmentInput] = useState('')
  const [attachments, setAttachments] = useState<string[]>([])
  const [peopleInput, setPeopleInput] = useState('')
  const [people, setPeople] = useState<string[]>([])
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState('todo')
  const [priority, setPriority] = useState('medium')
  const [createdBy, setCreatedBy] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onSubmit({
      title: title.trim(),
      description: description.trim() || undefined,
      labels: labels.length > 0 ? labels : undefined,
      images: images.length > 0 ? images : undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
      people: people.length > 0 ? people : undefined,
      dueDate: dueDate || undefined,
      status,
      priority,
      createdBy: createdBy || undefined,
    })

    setTitle('')
    setDescription('')
    setLabels([])
    setImages([])
    setAttachments([])
    setPeople([])
    setDueDate('')
    setStatus('todo')
    setPriority('medium')
    setCreatedBy('')
  }

  const handleAddPerson = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && peopleInput.trim()) {
      e.preventDefault()
      setPeople([...people, peopleInput.trim()])
      setPeopleInput('')
    }
  }

  const handleAddLabel = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && labelInput.trim()) {
      e.preventDefault()
      setLabels([...labels, labelInput.trim()])
      setLabelInput('')
    }
  }

  const handleAddAttachment = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && attachmentInput.trim()) {
      e.preventDefault()
      setAttachments([...attachments, attachmentInput.trim()])
      setAttachmentInput('')
    }
  }

  const handleImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImages(prev => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#1a1a1a] text-white border border-gray-700 rounded-lg p-6 max-h-[94vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task name */}
          <div className="flex items-center gap-4">
            <Label htmlFor="title" className="text-sm font-normal w-1/4">Task Name</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
              className="w-full bg-[#2c2c2c] border py-1.5 border-gray-600 text-xs rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* People */}
          <div className="flex items-center gap-4">
            <Label htmlFor="people" className="text-sm font-normal w-1/4">People</Label>
            <div className="flex items-center gap-2 w-full">
              <Input
                id="people"
                value={peopleInput}
                onChange={(e) => setPeopleInput(e.target.value)}
                onKeyDown={handleAddPerson}
                placeholder="Enter name and press Enter"
                className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Button
                type="button"
                onClick={() => {
                  if (peopleInput.trim()) {
                    setPeople([...people, peopleInput.trim()])
                    setPeopleInput('')
                  }
                }}
                className="custom-get-started-button" style={{width:"80px", height:"36px"}}
              >
                Add
              </Button>
            </div>
          </div>

          {people.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {people.map((person, index) => (
                <Badge key={index} className="flex items-center space-x-1 bg-gray-800 text-xs px-3  rounded-full">
                  <User className="w-4 h-4" />
                  <span>{person}</span>
                  <button
                    type="button"
                    onClick={() => setPeople(people.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Image Upload */}
          <div className="flex items-center gap-4">
            <Label htmlFor="image" className="text-sm font-normal w-1/4">Image</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              multiple
              onChange={handleImagesUpload}
              className="w-full bg-[#2c2c2c] border border-gray-600 text-xs py-1.5 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                {images.map((image, index) => (
             <div key={index} className="relative group">
             <img src={image} alt={`Task image ${index + 1}`} 
                  className="w-full h-32 object-cover rounded-md border border-gray-700"/>
             <button type="button"
                     onClick={() => removeImage(index)}
                     className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1">
             <X className="w-4 h-4" />
             </button>
              </div>
             ))}
             </div>)}

          {/* Attachments */}
          <div className="flex items-center gap-4">
            <Label htmlFor="attachments" className="text-sm font-normal w-1/4">Attachments</Label>
            <div className="flex items-center gap-2 w-full">
              <Input
                id="attachments"
                value={attachmentInput}
                onChange={(e) => setAttachmentInput(e.target.value)}
                onKeyDown={handleAddAttachment}
                placeholder="Enter attachment URL and press Enter"
                className="w-full bg-[#2c2c2c] border border-gray-600 text-xs py-1.5 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Button
                type="button"
                onClick={() => {
                  if (attachmentInput.trim()) {
                    setAttachments([...attachments, attachmentInput.trim()])
                    setAttachmentInput('')
                  }
                }}
                className="custom-get-started-button" style={{width:"80px",  height:"36px"}}>
                Add
              </Button>
            </div>
          </div>

          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {attachments.map((attachment, index) => (
                <Badge key={index} className="flex items-center space-x-1 bg-gray-800 text-xs px-3 py-1 rounded-full">
                  <a href={attachment} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    {attachment}
                  </a>
                  <button
                    type="button"
                    onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Due Date */}
          <div className="flex items-center gap-4">
            <Label htmlFor="dueDate" className="text-sm font-normal w-1/4">Due Date</Label>
            <Input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div className="flex items-center gap-4">
            <Label htmlFor="status" className="text-sm font-normal w-1/4">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority */}
          <div className="flex items-center gap-4">
            <Label htmlFor="priority" className="text-sm font-normal w-1/4">Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tags/Labels */}
          <div className="flex items-center gap-4">
            <Label htmlFor="labels" className="text-sm font-normal w-1/4">Tags</Label>
            <div className="flex items-center gap-2 w-full">
              <Input
                id="labels"
                value={labelInput}
                onChange={(e) => setLabelInput(e.target.value)}
                onKeyDown={handleAddLabel}
                placeholder="Press Enter to add tags"
                className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Button
                type="button"
                onClick={() => {
                  if (labelInput.trim()) {
                    setLabels([...labels, labelInput.trim()])
                    setLabelInput('')
                  }
                }}
               className="custom-get-started-button" style={{width:"80px", height:"36px"}}>
                Add
              </Button>
            </div>
          </div>

          {labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {labels.map((label, index) => (
                <Badge key={index} className="flex items-center space-x-1 bg-gray-800 text-xs px-3 py-1.5 rounded-full">
                  <span>{label}</span>
                  <button
                    type="button"
                    onClick={() => setLabels(labels.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="text-sm font-normal w-1/4">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              rows={3}
              className="w-full bg-[#2c2c2c] border border-gray-600 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="custom-get-started-button" style={{width:"100px"}}
            >
              Add Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal
