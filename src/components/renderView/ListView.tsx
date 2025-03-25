import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User, Search, ChevronUp, ChevronDown } from "lucide-react";

// Define interfaces for type safety
interface Task {
  id: number;
  title: string;
  status: string;
  priority: "low" | "medium" | "high";
  dueDate?: string | Date; // Allow both string and Date formats
  people?: string[];
  labels?: string[];
}

interface Column {
  title: string;
  tasks: Task[];
}

interface ListViewProps {
  columns?: Column[];
}

interface SortConfig {
  key: keyof Task | null;
  direction: "asc" | "desc";
}

const ListView: React.FC<ListViewProps> = ({ columns = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  const getAllTasks = (): (Task & { status: string })[] => {
    return (
      columns?.reduce<(Task & { status: string })[]>((acc, column) => {
        const tasksWithStatus = column.tasks.map((task) => ({
          ...task,
          status: column.title,
          dueDate:
            typeof task.dueDate === "string"
              ? task.dueDate
              : task.dueDate?.toISOString(), // Convert Date to string if needed
        }));
        return [...acc, ...tasksWithStatus];
      }, []) || []
    );
  };

  const sortTasks = (tasks: (Task & { status: string })[]) => {
    if (!sortConfig.key) return tasks;

    return [...tasks].sort((a, b) => {
      const valueA = a[sortConfig.key!];
      const valueB = b[sortConfig.key!];

      if (valueA == null) return sortConfig.direction === "asc" ? 1 : -1;
      if (valueB == null) return sortConfig.direction === "asc" ? -1 : 1;

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortConfig.direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
      }

      return 0;
    });
  };

  const requestSort = (key: keyof Task) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredTasks = getAllTasks().filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = sortTasks(filteredTasks);

  const getSortIcon = (key: keyof Task) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <ChevronUp className="w-4 h-4" />
      ) : (
        <ChevronDown className="w-4 h-4" />
      );
    }
    return null;
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex items-center space-x-2 bg-[#121416] p-2 rounded-lg border border-white/10 max-w-md">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none text-white placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">
                <button
                  onClick={() => requestSort("title")}
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  Task {getSortIcon("title")}
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => requestSort("status")}
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  Status {getSortIcon("status")}
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => requestSort("priority")}
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  Priority {getSortIcon("priority")}
                </button>
              </th>
              <th className="p-4 text-left">Assignees</th>
              <th className="p-4 text-left">
                <button
                  onClick={() => requestSort("dueDate")}
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  Due Date {getSortIcon("dueDate")}
                </button>
              </th>
              <th className="p-4 text-left">Labels</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <tr key={task.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="p-4">{task.title}</td>
                <td className="p-4">
                  <Badge className="bg-gray-700 text-white">{task.status}</Badge>
                </td>
                <td className="p-4">
                  <Badge
                    className={`${
                      task.priority === "high"
                        ? "bg-red-500/20 text-red-500"
                        : task.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-green-500/20 text-green-500"
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </td>
                <td className="p-4">
                  <div className="flex -space-x-2">
                    {task.people?.map((person, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center border-2 border-gray-800"
                        title={person}
                      >
                        <User className="w-4 h-4 text-gray-300" />
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {task.labels?.map((label, index) => (
                      <Badge key={index} className="bg-gray-700 text-white">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListView;
