import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define interfaces for better type safety
interface Task {
  id: number;
  title: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  title: string;
  tasks: Task[];
}

interface CalendarViewProps {
  columns?: Column[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ columns = [] }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Get all tasks from all columns with type safety
  const getAllTasks = (): (Task & { status: string })[] => {
    return columns.reduce<(Task & { status: string })[]>((acc, column) => {
      const tasksWithStatus = column.tasks.map(task => ({
        ...task,
        status: column.title
      }));
      return [...acc, ...tasksWithStatus];
    }, []);
  };

  // Add type annotations to functions
  const daysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getTasksForDate = (date: number): (Task & { status: string })[] => {
    return getAllTasks().filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return taskDate.getDate() === date &&
             taskDate.getMonth() === currentDate.getMonth() &&
             taskDate.getFullYear() === currentDate.getFullYear();
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const renderCalendar = () => {
    const days = daysInMonth(currentDate);
    const startDay = startOfMonth(currentDate);
    const weeks = Math.ceil((days + startDay) / 7);
    const calendar: JSX.Element[] = [];
    let dayCount = 1;

    for (let week = 0; week < weeks; week++) {
      const weekDays: JSX.Element[] = [];
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < startDay) || dayCount > days) {
          weekDays.push(
            <div key={`empty-${week}-${day}`} className="h-32 bg-gray-800/30 border border-gray-700"/>
          );
        } else {
          const tasksForDay = getTasksForDate(dayCount);
          weekDays.push(
            <div 
              key={dayCount}
              className="h-32 bg-gray-800/30 border border-gray-700 p-2 overflow-hidden hover:overflow-auto"
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm ${
                  new Date().getDate() === dayCount &&
                  new Date().getMonth() === currentDate.getMonth() &&
                  new Date().getFullYear() === currentDate.getFullYear()
                    ? 'bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center'
                    : ''
                }`}>
                  {dayCount}
                </span>
              </div>
              <div className="space-y-1">
                {tasksForDay.map((task) => (
                  <div 
                    key={task.id} 
                    className={`p-1 rounded text-xs truncate ${
                      task.priority === 'high' ? 'bg-red-500/20 text-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-green-500/20 text-green-500'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <Badge 
                        className="px-1 py-0.5 text-[10px]"
                        variant="outline"
                      >
                        {task.status}
                      </Badge>
                      {task.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
          dayCount++;
        }
      }
      calendar.push(
        <div key={`week-${week}`} className="grid grid-cols-7 gap-px">
          {weekDays}
        </div>
      );
    }
    return calendar;
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button
            onClick={prevMonth}
            variant="outline"
            size="icon"
            className="w-8 h-8 bg-gray-800/30 border-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">{formatDate(currentDate)}</h2>
          <Button
            onClick={nextMonth}
            variant="outline"
            size="icon"
            className="w-8 h-8 bg-gray-800/30 border-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px mb-px">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="p-2 text-center text-sm font-medium text-gray-400 bg-gray-800/30"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CalendarView;