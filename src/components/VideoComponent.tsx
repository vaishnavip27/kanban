import { useState, useRef, useEffect } from "react";
import { Clock, CalendarDays, Video } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const VideoComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const buttonRef = useRef(null);
  const dragStartXRef = useRef(0);

  const handleStart = (clientX) => {
    setIsDragging(true);
    dragStartXRef.current = clientX - position;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const maxPosition = buttonWidth - 48; // slider width
    const newPosition = Math.max(
      0,
      Math.min(clientX - dragStartXRef.current, maxPosition)
    );
    setPosition(newPosition);

    if (newPosition >= maxPosition * 0.9) {
      setPosition(maxPosition);
      setIsDragging(false);
      console.log("Joined!");
    }
  };

  const handleEnd = () => {
    if (isDragging) {
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const maxPosition = buttonWidth - 48;
      if (position < maxPosition * 0.9) {
        setPosition(0);
      }
      setIsDragging(false);
    }
  };

  // Touch Events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  const percentComplete =
    (position / (buttonRef.current?.offsetWidth - 48 || 1)) * 100;
  return (
    <div className="bg-black p-2 rounded-xl">
      <div className="flex -space-x-7 mb-2 mt-2">
        <Avatar>
          <AvatarImage src="/profile.png" alt="User 1" className="h-8 w-8" />
        </Avatar>
        <Avatar>
          <AvatarImage src="/profile.png" alt="User 2" className="h-8 w-8" />
        </Avatar>
        <Avatar>
          <AvatarImage src="/profile.png" alt="User 3" className="h-8 w-8" />
        </Avatar>
        <Avatar>
          <AvatarImage src="/profile.png" alt="User 4" className="h-8 w-8" />
        </Avatar>
      </div>

      <div className="flex gap-4 text-gray-300 text-sm justify-between mb-6 items-center px-2">
        <div className="flex items-center justify-between gap-2">
          <div className="bg-slate-800 p-1.5 rounded-md">
            <Clock className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Duration</span>
            <span className="text-xs">45 mint</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-slate-800 p-1.5 rounded-md">
            <CalendarDays className="w-4 h-4 " />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Date</span>
            <span className="text-xs">27 Sep, 2024</span>
          </div>
        </div>
      </div>

      <div
        ref={buttonRef}
        className="relative w-full max-w-xs h-10 bg-gray-800 rounded-full overflow-hidden touch-none select-none mb-4"
      >
        {/* Track */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
          Swipe to join
        </div>

        {/* Progress background */}
        <div
          className="absolute inset-0 bg-green-500/10 transition-all duration-150"
          style={{ width: `${percentComplete}%` }}
        />

        {/* Draggable thumb */}
        <div
          className={`absolute top-1 left-1 h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center
                        ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translateX(${position}px)`,
            transition: isDragging ? "none" : "all 0.3s ease",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Video className="w-4 h-4 text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
