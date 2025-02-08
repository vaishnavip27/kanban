"use client";

import { useState, useMemo } from "react";
import { MoveLeft, Search, Bell, Plus, SortAsc, SortDesc } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import CreateProjectForm from "../components/CreateProjectForm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Project = {
  id: number;
  name: string;
  description: string;
  tasksCompleted: number;
  totalTasks: number;
};

const initialProjects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website to improve user experience.",
    tasksCompleted: 3,
    totalTasks: 10,
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create a new mobile app for our customers.",
    tasksCompleted: 2,
    totalTasks: 8,
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Plan and execute Q4 marketing campaign.",
    tasksCompleted: 1,
    totalTasks: 5,
  },
  {
    id: 4,
    name: "Marketing Campaign",
    description: "Plan and execute Q4 marketing campaign.",
    tasksCompleted: 1,
    totalTasks: 5,
  },
];

type SortOption = "name" | "progress";
type SortDirection = "asc" | "desc";

const ProjectPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [filterText, setFilterText] = useState("");

  const handleCreateProject = (
    newProject: Omit<Project, "id" | "tasksCompleted" | "totalTasks">
  ) => {
    setProjects([
      ...projects,
      {
        ...newProject,
        id: projects.length + 1,
        tasksCompleted: 0,
        totalTasks: 0,
      },
    ]);
    setShowForm(false);
  };

  const navigateToProject = (projectId: number) => {
    console.log(`Navigating to project ${projectId}`);
    // Implement actual navigation logic here
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortedAndFilteredProjects = useMemo(() => {
    return projects
      .filter(
        (project) =>
          project.name.toLowerCase().includes(filterText.toLowerCase()) ||
          project.description.toLowerCase().includes(filterText.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "name") {
          return sortDirection === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else {
          const progressA = a.tasksCompleted / a.totalTasks;
          const progressB = b.tasksCompleted / b.totalTasks;
          return sortDirection === "asc"
            ? progressA - progressB
            : progressB - progressA;
        }
      });
  }, [projects, sortBy, sortDirection, filterText]);

  return (
    <div className="flex h-screen bg-[#0B0B0E] overflow-x-hidden">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <header className="p-3 border-b border-gray-800/50 px-6 bg-[#121216]">
          <div className="flex items-center justify-between">
            <MoveLeft className="h-5 w-5" />
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 bg-[#121416] p-2 rounded-lg border border-gray-800/50">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-gray-400 outline-none"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </div>
              <div className="border border-gray-800/50 p-2 rounded-sm">
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto p-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-normal text-white">Projects</h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center sm:items-center gap-4 mb-7">
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#121216] text-white border-gray-800/50 hover:bg-[#1A1A1F]"
                    >
                      <SortAsc className="mr-2 h-4 w-4" />
                      Sort by
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="bg-[#121216] border-gray-800/50"
                  >
                    <DropdownMenuItem
                      onClick={() => setSortBy("name")}
                      className="text-white hover:bg-[#1A1A1F]"
                    >
                      Name
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSortBy("progress")}
                      className="text-white hover:bg-[#1A1A1F]"
                    >
                      Progress
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleSortDirection}
                  className="bg-[#121216] text-white border-gray-800/50 hover:bg-[#1A1A1F]"
                >
                  {sortDirection === "asc" ? (
                    <SortAsc className="h-4 w-4" />
                  ) : (
                    <SortDesc className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  onClick={() => setShowForm(true)}
                  size="icon"
                  className="custom-get-started-button"
                  style={{ padding: "16px" }}
                >
                  <Plus className="h-4 w-4" />
                  <span>Create new project</span>
                </Button>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {sortedAndFilteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => navigateToProject(project.id)}
                />
              ))}
            </div>
          </div>
        </main>

        {showForm && (
          <CreateProjectForm
            onSubmit={handleCreateProject}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
