import { MessageCircle, Phone, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatBox = () => {
  const contacts = [
    { name: 'John Smith', status: 'Online' },
    { name: 'Sarah Wilson', status: 'Away' },
    { name: 'Mike Johnson', status: 'Busy' },
    { name: 'Emma Davis', status: 'Online' },
  ];

  return (
    <div className="flex flex-col h-full border border-white">
      <div className="mt-5 space-y-3 flex-grow">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <User size={16} className="text-gray-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{contact.name}</span>
                <span className="text-xs text-gray-400">{contact.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
              <Phone size={16} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      <Button className="custom-get-started-button">+ Add new chat</Button>
    </div>
  );
};

export default ChatBox;