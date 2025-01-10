import React, { useState } from 'react';
import { Plus, MoreVertical, ChevronDown } from 'lucide-react';
import TaskModal from './TaskModal';

interface Task {
  id: string;
  title: string;
  description?: string;
  labels?: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
  columns: Column[];
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onMoveTask: (taskId: string, targetColumnId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ 
  id, 
  title, 
  tasks, 
  columns,
  onAddTask,
  onMoveTask,
  onDeleteTask,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openTaskMenu, setOpenTaskMenu] = useState<string | null>(null);

  return (
    <div className="flex-shrink-0 w-80 bg-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-gray-200">{title}</h3>
          <span className="px-2 py-1 text-xs bg-gray-700 rounded-full text-gray-400">
            {tasks.length}
          </span>
        </div>
        <button className="p-1 hover:bg-gray-700 rounded">
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="relative bg-gray-700 p-3 rounded-lg shadow cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          >
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-gray-200">{task.title}</h4>
              <button 
                onClick={() => setOpenTaskMenu(openTaskMenu === task.id ? null : task.id)}
                className="p-1 hover:bg-gray-500 rounded"
              >
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            {task.description && (
              <p className="text-xs text-gray-400 mt-1">{task.description}</p>
            )}
            {task.labels && (
              <div className="flex gap-2 mt-2">
                {task.labels.map((label) => (
                  <span
                    key={label}
                    className="px-2 py-1 text-xs rounded bg-gray-600 text-gray-300"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
            
            {openTaskMenu === task.id && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  {columns.map((column) => (
                    column.id !== id && (
                      <button
                        key={column.id}
                        onClick={() => {
                          onMoveTask(task.id, column.id);
                          setOpenTaskMenu(null);
                        }}
                        className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 text-left"
                      >
                        Move to {column.title}
                      </button>
                    )
                  ))}
                  <button
                    onClick={() => {
                      onDeleteTask(task.id);
                      setOpenTaskMenu(null);
                    }}
                    className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-600 text-left"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full p-2 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <Plus className="w-5 h-5 mr-1" />
          Add Card
        </button>
      </div>

      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(task) => {
            onAddTask(task);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default KanbanColumn;