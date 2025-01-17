import React, { useState } from 'react';
import { Ellipsis, Plus } from 'lucide-react';
import TaskModal from './TaskModal';
import AvatarGroup from './AvatarGroup';

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

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
  columns: Column[];
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onMoveTask: (taskId: string, targetColumnId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string, sourceColumnId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ 
  id, 
  title, 
  tasks, 
  onAddTask,
  onMoveTask,
  onDragStart
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    onDragStart(e, taskId, id);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');

    if (taskId && sourceColumnId !== id) {
      onMoveTask(taskId, id);
    }

    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div 
      className="flex-shrink-0 w-[298px] bg-[#17171C] rounded-lg" 
      onDrop={handleDrop} 
      onDragOver={handleDragOver}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-gray-200">{title}</h3>
          <span className="px-2 py-1 text-xs bg-[#242629] rounded-full text-gray-400">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Plus className="w-5 h-5 text-gray-400" />
          </button>
          <button 
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Ellipsis className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-3 p-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
            className="bg-[#0B0B0E]/40 backdrop-blur-xl border border-[#5a3cb4]/30 p-3 rounded-md shadow cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          >
            {/* Labels */}
            {task.labels && (
              <div className="flex gap-1 mb-2">
                {task.labels.map((label) => (
                  <span
                    key={label}
                    className="px-3 py-2 text-xs bg-transparent border border-[#5a3cb4]/30 text-gray-300 rounded-xl backdrop-blur-xl"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h4 className="text-md font-normal text-gray-200">{task.title}</h4>

            {/* Description */}
            {task.description && (
              <p className="text-sm text-gray-400 mt-1">{task.description}</p>
            )}

            {/* Image */}
            {task.image && (
              <div className="mt-2">
                <img 
                  src={task.image} 
                  alt={task.title}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}

            {/* <div className="w-full h-[1px] bg-gray-400 mt-3"></div> */}
            

            {/* //Asignees */}
            <div className="flex mt-2 justify-between items-center">
              <div className="text-xs">
                Asignees : 
              </div>
              <div>
              <AvatarGroup />
              </div>
            </div>
          </div>
        ))}
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
};

export default KanbanColumn;
