import { MessageCircle, Phone, User } from 'lucide-react';

const ChatBox = () => {
  const contacts = [
    { name: 'John Smith', status: 'Online' },
    { name: 'Sarah Wilson', status: 'Away' },
    { name: 'Mike Johnson', status: 'Busy' },
    { name: 'Emma Davis', status: 'Online' },
    { name: 'Alex Turner', status: 'Offline' }
  ];

  return (
    <div className="mt-4 space-y-3">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
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
  );
};

export default ChatBox;