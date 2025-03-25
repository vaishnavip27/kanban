import { motion } from "framer-motion";

interface Task {
  id: number;
  avatar: string;
}

const TaskManagementSection: React.FC = () => {
  // Sample data for tasks
  const tasks: Task[] = [
    {
      id: 1,
      avatar: "/profile.png",
    },
    {
      id: 2,
      avatar: "/profile.png",
    },
    {
      id: 3,
      avatar: "/profile.png",
    },
    {
      id: 4,
      avatar: "/profile.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between  px-44  text-white bg-[#0c041c] mb-32 ml-20">
      {/* Left Side: Text Content */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          <em>Faster</em>, smarter Project Management
        </h2>
        <p className="text-gray-400 max-w-lg text-xl">
          Our intuitive platform provides everything you need to efficiently
          manage your projects, from real-time collaboration to detailed task
          tracking.
        </p>
      </div>

      {/* Right Side: Animated UI */}
      <div className="relative w-full md:w-1/2 h-96 flex items-center justify-center cursor-pointer">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex flex-col space-y-6 justify-center"
        >
          {/* Task Cards with Glassmorphic Design */}
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex items-center w-full md:w-4/5 border border-white/5 rounded-full 
                bg-white/5 backdrop-blur-md 
                shadow-xl
                hover:bg-white/10 transition-all duration-300 
                hover:border-white/20"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={task.avatar}
                  alt="User Avatar"
                  className="rounded-full w-14 h-14"
                />
              </div>

              {/* Progress Bar Container */}
              <div className="flex-grow ml-4 mr-8">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  {/* Animated Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(index + 1) * 25}%` }}
                    transition={{
                      delay: index * 0.2 + 0.4,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-full bg-purple-900/80 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TaskManagementSection;
