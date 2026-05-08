import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Phone, Video, MoreVertical, Send } from 'lucide-react';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function ChatPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // w1 or w2
  const { mockWorkers } = useAppStore();
  const [inputText, setInputText] = useState('');
  
  const worker = mockWorkers.find(w => w.id === id) || mockWorkers[0];

  // Mock messages based on worker ID
  const initialMessages = id === 'w1' ? [
    { id: 1, sender: 'worker', text: 'Good morning sir! I saw your post for a residential house project.', time: '10:00 AM' },
    { id: 2, sender: 'employer', text: 'Hi Juan! Yes, we need a mason starting next week. Are you available?', time: '10:15 AM' },
    { id: 3, sender: 'worker', text: 'I am available to start on Monday.', time: '10:45 AM' }
  ] : [
    { id: 1, sender: 'employer', text: 'Hi Maria, do you do landscaping for commercial spaces?', time: 'Yesterday' },
    { id: 2, sender: 'worker', text: 'Hello! Yes I do. I have experience with small office gardens.', time: 'Yesterday' },
    { id: 3, sender: 'worker', text: 'Thanks for the opportunity! Here is my updated portfolio.', time: 'Yesterday' }
  ];

  const [messages, setMessages] = useState(initialMessages);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'employer', text: inputText, time: 'Just now' }]);
    setInputText('');
  };

  return (
    <PageTransition className="flex flex-col h-full bg-white relative">
      {/* Chat Header */}
      <div className="bg-white pt-6 pb-3 px-4 border-b border-gray-100 flex items-center justify-between z-10 sticky top-0 shadow-sm">
        <div className="flex items-center">
           <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors mr-2">
             <ArrowLeft size={20} />
           </button>
           <img src={worker.avatarUrl} alt={worker.name} className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200" />
           <div>
             <h2 className="font-bold text-gray-900 text-sm">{worker.name}</h2>
             <p className="text-[10px] text-green-500 font-semibold flex items-center">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
               Online
             </p>
           </div>
        </div>
        <div className="flex space-x-1">
           <button className="p-2 text-primary rounded-full hover:bg-blue-50 transition-colors">
             <Phone size={18} />
           </button>
           <button className="p-2 text-gray-400 rounded-full hover:bg-gray-100 transition-colors">
             <MoreVertical size={18} />
           </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 bg-gray-50/50">
        <div className="flex justify-center mb-4">
           <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
             {id === 'w1' ? 'Today' : 'Yesterday'}
           </span>
        </div>
        
        {messages.map(msg => {
          const isEmployer = msg.sender === 'employer';
          return (
            <div key={msg.id} className={`flex flex-col ${isEmployer ? 'items-end' : 'items-start'}`}>
               <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                 isEmployer 
                   ? 'bg-primary text-white rounded-tr-sm' 
                   : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
               }`}>
                  {msg.text}
               </div>
               <span className="text-[9px] text-gray-400 mt-1 px-1 font-medium">{msg.time}</span>
            </div>
          );
        })}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t border-gray-100 flex items-center">
         <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-xl leading-none">+</span>
         </button>
         <input 
            type="text" 
            placeholder="Type a message..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 h-10 bg-gray-100 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
         />
         <button 
           onClick={handleSend}
           disabled={!inputText.trim()}
           className={`w-10 h-10 rounded-full flex items-center justify-center ml-2 flex-shrink-0 transition-colors ${
             inputText.trim() ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
           }`}
         >
            <Send size={16} className={inputText.trim() ? 'ml-0.5' : ''} />
         </button>
      </div>
    </PageTransition>
  );
}
