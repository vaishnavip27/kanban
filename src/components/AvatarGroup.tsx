// AvatarGroup.tsx
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

const AvatarGroup = () => {
  // Sample data for avatars - you can replace with your actual data
  const avatars = [
    { src: "/public/profile.png", alt: "User 1", fallback: "JD" },
    { src: "/public/profile.png", alt: "User 2", fallback: "AB" },
    { src: "/public/profile.png", alt: "User 3", fallback: "CD" },
  ];

  return (
    <div className="flex -space-x-5 border border-black">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className=" h-9 w-9">
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