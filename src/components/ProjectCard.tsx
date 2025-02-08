import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Project {
  id: number
  name: string
  description: string
  tasksCompleted: number
  totalTasks: number
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const progress = (project.tasksCompleted / project.totalTasks) * 100

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card
        className="overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-md bg-[#121216] border-gray-800/50"
        onClick={onClick}
      >
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-300">{project.name}</h2>
          <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{project.description}</p>
        </CardContent>
        <CardFooter className="bg-[#0B0B0E] px-6 py-4">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                {project.tasksCompleted}/{project.totalTasks} tasks
              </span>
              <span className="text-sm font-medium text-blue-400">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1 bg-gray-700" />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

