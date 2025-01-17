// AvatarGroup.tsx
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

const AvatarGroup = () => {
  // Sample data for avatars - you can replace with your actual data
  const avatars = [
    { src: "/profile.png", alt: "User 1", fallback: "JD" },
    { src: "/profile.png", alt: "User 2", fallback: "AB" },
    { src: "/profile.png", alt: "User 3", fallback: "CD" },
  ];

  return (
    <div className="flex -space-x-5">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className=" h-7 w-7">
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback className="bg-gray-600 text-gray-200 text-xs">
            {avatar.fallback}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default AvatarGroup;