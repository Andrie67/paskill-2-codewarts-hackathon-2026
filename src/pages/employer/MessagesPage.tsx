import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, CheckCircle2 } from 'lucide-react';
import { BottomNavigation } from '../../components/ui/BottomNavigation';
import { PageTransition } from '../../layouts/PageTransition';

export default function MessagesPage() {
  const navigate = useNavigate();

  const conversations = [
    {
      id: 'w1',
      name: 'Juan Dela Cruz',
      avatar: 'https://i.pravatar.cc/150?u=juan',
      role: 'Construction Worker',
      lastMessage: 'I am available to start on Monday.',
      time: '10:45 AM',
      unread: 2,
      isVerified: true,
      confidenceScore: 82
    },
    {
      id: 'w2',
      name: 'Maria Santos',
      avatar: 'https://i.pravatar.cc/150?u=maria',
      role: 'Gardener',
      lastMessage: 'Thanks for the opportunity! Here is my updated portfolio.',
      time: 'Yesterday',
      unread: 0,
      isVerified: true,
      confidenceScore: 78
    }
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-gray-50 relative">
      <div className="bg-white pt-6 pb-4 px-6 border-b border-gray-100 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <Search size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-20 space-y-3">
        {conversations.map((chat) => (
          <div 
            key={chat.id} 
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => navigate(`/employer/messages/${chat.id}`)}
          >
            <div className="relative mr-4">
               <img src={chat.avatar} alt={chat.name} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
               {chat.unread > 0 && (
                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                   <span className="text-[10px] font-bold text-white">{chat.unread}</span>
                 </div>
               )}
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="font-bold text-gray-900 truncate pr-2">{chat.name}</h3>
                 <span className={`text-xs flex-shrink-0 ${chat.unread > 0 ? 'text-accent font-semibold' : 'text-gray-400'}`}>
                   {chat.time}
                 </span>
               </div>
               <div className="flex items-center mb-1">
                 {chat.isVerified && <CheckCircle2 size={12} className="text-green-500 mr-1" />}
                 <span className="text-xs text-gray-500 truncate">{chat.role}</span>
                 <span className="text-xs text-gray-300 mx-1">•</span>
                 <span className="text-xs font-semibold text-green-600">{chat.confidenceScore}% Score</span>
               </div>
               <p className={`text-sm truncate ${chat.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                 {chat.lastMessage}
               </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </PageTransition>
  );
}
