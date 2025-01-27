import { useState } from "react";
import { MoveLeft, Search, Bell, UserPlus, Paintbrush } from "lucide-react";
import Navbar from "../../components/Navbar";
import KanbanColumn from "../../components/KanbanColumn";
import TaskModal from "../../components/TaskModal";
import { Button } from "@/components/ui/button";
import { HorizontalNavbar } from "@/components/HorizontalNavbar";
import ListView from "@/components/renderView/ListView";
import TimelineView from "@/components/renderView/TimelineView";
import CalenderView from "@/components/renderView/CalenderView";

interface Task {
  id: string;
  title: string;
  description?: string;
  labels?: string[];
  image?: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  { id: "todo", title: "To Do", tasks: [] },
  { id: "inProgress", title: "In Progress", tasks: [] },
  { id: "review", title: "Review", tasks: [] },
  { id: "done", title: "Done", tasks: [] },
];

const PlaceholderComponent = ({ title }: { title: string }) => (
  <div className="text-white text-center w-full">
    <h2 className="text-2xl">{title} Placeholder</h2>
    <p>This is a placeholder component rendered when "{title}" is clicked.</p>
  </div>
);

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState("Overview");

  const handleAddTask = (task: Omit<Task, "id">, columnId: string) => {
    const newTask = { ...task, id: Math.random().toString(36).substr(2, 9) };

    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? { ...column, tasks: [...column.tasks, newTask] }
          : column
      )
    );
  };

  const handleMoveTask = (taskId: string, sourceColumnId: string, targetColumnId: string) => {
    const sourceColumn = columns.find((col) => col.id === sourceColumnId);
    const task = sourceColumn?.tasks.find((t) => t.id === taskId);

    if (!task) return;

    setColumns(
      columns.map((column) => {
        if (column.id === sourceColumnId) {
          return { ...column, tasks: column.tasks.filter((t) => t.id !== taskId) };
        }
        if (column.id === targetColumnId) {
          return { ...column, tasks: [...column.tasks, task] };
        }
        return column;
      })
    );
  };

  const handleDeleteTask = (taskId: string, columnId: string) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? { ...column, tasks: column.tasks.filter((task) => task.id !== taskId) }
          : column
      )
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string, sourceColumnId: string) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("sourceColumnId", sourceColumnId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetColumnId: string) => {
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");

    if (taskId && sourceColumnId && sourceColumnId !== targetColumnId) {
      handleMoveTask(taskId, sourceColumnId, targetColumnId);
    }
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderView = () => {
    switch (activeView) {
      case "Board":
        return <PlaceholderComponent title="Board" />;
      case "List":
        return <ListView/>;
      case "Timeline":
        return <TimelineView/>;
      case "Calendar":
        return <CalenderView/>;
      default:
        return (
          <div className="flex gap-4 overflow-x-auto mt-6">
            {columns.map((column) => (
              <div
                key={column.id}
                className="flex-shrink-0 w-[298px] bg-[#121216] rounded-lg"
                onDrop={(e) => handleDrop(e, column.id)}
                onDragOver={handleDragOver}
              >
                <KanbanColumn
                  {...column}
                  onAddTask={(task) => handleAddTask(task, column.id)}
                  onMoveTask={(taskId, targetColumnId) =>
                    handleMoveTask(taskId, column.id, targetColumnId)
                  }
                  onDeleteTask={(taskId) => handleDeleteTask(taskId, column.id)}
                  onDragStart={handleDragStart}
                  columns={columns}
                />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#0B0B0E] overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col flex-grow overflow-y-auto">
        <header className="p-3 border-b border-gray-800 px-6 bg-[#121216]">
          <div className="flex items-center justify-between">
            <MoveLeft className="h-5 w-5" />
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 bg-[#121416] p-2 rounded-lg border border-white/10">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-gray-400 outline-none"
                />
              </div>
              <div className="border border-gray-800 p-2 rounded-sm">
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 overflow-y-auto">
          <h2 className="text-2xl font-normal text-white mb-4">Onboarding Dashboard</h2>

          <div className="flex items-center justify-between mb-6">
            <HorizontalNavbar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex gap-3">
              <Button className="justify-between w-full sm:w-auto h-10 bg-[#17171C]">
                <span>Customize</span>
                <Paintbrush className="ml-2 h-4 w-4" />
              </Button>
              <Button className="justify-between w-full sm:w-auto h-10 bg-[#17171C]">
                <span>Invite Member</span>
                <UserPlus className="ml-1 h-4 w-4" />
              </Button>
              <Button className="custom-get-started-button" style={{ width: "120px" }} onClick={() => setIsModalOpen(true)}>
                <span>Add task</span>
                <UserPlus className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-800"></div>

          {renderView()}
        </main>

        {isModalOpen && (
          <TaskModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={(task) => {
              handleAddTask(task, "todo");
              setIsModalOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
