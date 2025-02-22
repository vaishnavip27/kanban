import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const TimelineView = ({ columns = [] }) => {
  const [timeframe, setTimeframe] = useState('month'); // 'week', 'month', 'quarter'
  const [startDate, setStartDate] = useState(new Date());

  // Get all tasks from all columns
  const getAllTasks = () => {
    return columns.reduce((acc, column) => {
      const tasksWithStatus = column.tasks.map(task => ({
        ...task,
        status: column.title
      }));
      return [...acc, ...tasksWithStatus];
    }, []).filter(task => task.dueDate);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Get date range for current view
  const getDateRange = () => {
    const endDate = new Date(startDate);
    if (timeframe === 'week') {
      endDate.setDate(endDate.getDate() + 7);
    } else if (timeframe === 'month') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 3);
    }
    return { startDate, endDate };
  };

  // Navigation functions
  const moveTimeline = (direction) => {
    const newDate = new Date(startDate);
    if (timeframe === 'week') {
      newDate.setDate(newDate.getDate() + (direction * 7));
    } else if (timeframe === 'month') {
      newDate.setMonth(newDate.getMonth() + direction);
    } else {
      newDate.setMonth(newDate.getMonth() + (direction * 3));
    }
    setStartDate(newDate);
  };

  const filterTasksByDateRange = () => {
    const { startDate: start, endDate: end } = getDateRange();
    return getAllTasks().filter(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate >= start && taskDate <= end;
    }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };

  // Group tasks by date
  const groupTasksByDate = () => {
    const tasks = filterTasksByDateRange();
    const groups = {};
    
    tasks.forEach(task => {
      const dateKey = task.dueDate.split('T')[0];
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(task);
    });

    return groups;
  };

  return (
    <div className="p-4">
      {/* Timeline Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => moveTimeline(-1)}
            variant="outline"
            size="icon"
            className="w-8 h-8 bg-gray-800/30 border-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex space-x-2">
            {['week', 'month', 'quarter'].map((tf) => (
              <Button
                key={tf}
                onClick={() => setTimeframe(tf)}
                variant={timeframe === tf ? "default" : "outline"}
                className={`capitalize ${
                  timeframe === tf 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-800/30 border-gray-700'
                }`}
              >
                {tf}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => moveTimeline(1)}
            variant="outline"
            size="icon"
            className="w-8 h-8 bg-gray-800/30 border-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 w-px h-full bg-gray-700 top-8" />

        {/* Timeline Content */}
        <div className="space-y-8">
          {Object.entries(groupTasksByDate()).map(([date, tasks]) => (
            <div key={date} className="relative pl-8">
              {/* Date Node */}
              <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5 mt-3" />
              
              {/* Date and Tasks */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="font-medium text-gray-200 mb-3">
                  {formatDate(date)}
                </div>
                
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-4 bg-gray-700/30 p-3 rounded-lg"
                    >
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-white">{task.title}</h3>
                          <Badge className={`
                            ${task.priority === 'high' ? 'bg-red-500/20 text-red-500' : 
                              task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                              'bg-green-500/20 text-green-500'}
                          `}>
                            {task.priority}
                          </Badge>
                          <Badge className="bg-gray-600">{task.status}</Badge>
                        </div>
                        
                        {task.description && (
                          <p className="text-sm text-gray-400 mb-2">{task.description}</p>
                        )}
                        
                        <div className="flex items-center space-x-4">
                          {task.people && task.people.length > 0 && (
                            <div className="flex -space-x-2">
                              {task.people.map((person, index) => (
                                <div
                                  key={index}
                                  className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center border-2 border-gray-800"
                                  title={person}
                                >
                                  <User className="w-3 h-3 text-gray-300" />
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {task.labels && (
                            <div className="flex gap-1">
                              {task.labels.map((label, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;