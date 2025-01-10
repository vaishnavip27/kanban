import React, { useState } from 'react';
import { X, Image } from 'lucide-react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: { title: string; description?: string; labels?: string[]; image?: string }) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelInput, setLabelInput] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [image, setImage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim() || undefined,
      labels: labels.length > 0 ? labels : undefined,
      image: image || undefined,
    });

    setTitle('');
    setDescription('');
    setLabels([]);
    setImage('');
  };

  const handleAddLabel = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && labelInput.trim()) {
      e.preventDefault();
      setLabels([...labels, labelInput.trim()]);
      setLabelInput('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Add New Task</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter task title"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter task description"
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-1">
              Image
            </label>
            <div className="mt-1 flex items-center">
              <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer">
                <Image className="w-5 h-5 mr-2" />
                Choose Image
                <input
                  type="file"
                  id="image"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {image && (
              <div className="mt-2 relative">
                <img
                  src={image}
                  alt="Task preview"
                  className="w-full h-40 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setImage('')}
                  className="absolute top-2 right-2 p-1 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <X className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="labels" className="block text-sm font-medium text-gray-300 mb-1">
              Labels
            </label>
            <input
              type="text"
              id="labels"
              value={labelInput}
              onChange={(e) => setLabelInput(e.target.value)}
              onKeyDown={handleAddLabel}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Press Enter to add labels"
            />
            {labels.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {labels.map((label, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-600 text-gray-300 rounded-md flex items-center"
                  >
                    {label}
                    <button
                      type="button"
                      onClick={() => setLabels(labels.filter((_, i) => i !== index))}
                      className="ml-2 text-gray-400 hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-200"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;