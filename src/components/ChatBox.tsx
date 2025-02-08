import { MessageCircle, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBox = () => {
  const contacts = [
    { name: "Vaishnavi", status: "Online" },
    { name: "Jill", status: "Away" },
    { name: "Farhat", status: "Busy" },
    { name: "Manav", status: "Online" },
  ];

  return (
    <div className="flex flex-col h-auto border border-gray-800 bg-[#111111] p-3 rounded-xl text-gray-300">
      <div className=" space-y-4 flex-grow mb-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <User size={16} className="text-gray-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium">{contact.name}</span>
                <span className="text-xs text-gray-400">{contact.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle
                size={16}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Phone
                size={16}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <Button className="custom-get-started-button">+ Add new chat</Button>
    </div>
  );
};

export default ChatBox;
