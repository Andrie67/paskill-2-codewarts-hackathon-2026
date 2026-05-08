import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function ContactHirePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mockWorkers } = useAppStore();
  const [message, setMessage] = useState('');
  
  const worker = mockWorkers.find(w => w.id === id) || mockWorkers[0];

  const handleSend = () => {
    alert("Message sent! This is a mock interaction.");
    navigate('/employer/search');
  };

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Contact or Hire</h1>
        <p className="text-gray-500 mb-6 text-sm">Reach out or hire with confidence.</p>

        {/* Worker Summary Card */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center mb-8">
          <img src={worker.avatarUrl} alt={worker.name} className="w-14 h-14 rounded-full object-cover mr-4" />
          <div className="flex-1">
            <h2 className="text-base font-bold text-gray-900 leading-tight">{worker.name}</h2>
            <p className="text-xs font-medium text-gray-500 mb-1">{worker.category}</p>
            <div className="flex items-center text-[10px] text-green-600 font-semibold">
              <CheckCircle2 size={10} className="mr-1" />
              Verified Worker
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
             <span className="text-lg font-bold text-gray-900">{worker.confidenceScore}%</span>
             <span className="text-[8px] uppercase font-bold text-gray-400 text-center leading-tight">Confidence<br/>Score</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-3 text-sm">Choose an action</h3>
        
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center p-4 rounded-xl border-2 border-primary bg-blue-50/30 text-left transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4 flex-shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Message Worker</h4>
              <p className="text-xs text-gray-500 mt-0.5">Send a message to start the conversation.</p>
            </div>
          </button>
          
          <button className="w-full flex items-center p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-left transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-accent mr-4 flex-shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Schedule Interview</h4>
              <p className="text-xs text-gray-500 mt-0.5">Pick a date and time to interview.</p>
            </div>
          </button>
          
          <button className="w-full flex items-center p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-left transition-colors">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Hire Now</h4>
              <p className="text-xs text-gray-500 mt-0.5">Hire Juan for your upcoming project.</p>
            </div>
          </button>
        </div>

        <div className="flex-1 flex flex-col">
           <h3 className="font-bold text-gray-900 mb-2 text-sm">Send a message</h3>
           <textarea 
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             className="w-full flex-1 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors resize-none"
             placeholder="Type your message here..."
           />
           <div className="text-right text-xs text-gray-400 mt-2">
             {message.length}/500
           </div>
        </div>

        <div className="pt-4 pb-6 mt-auto">
          <Button 
            fullWidth 
            onClick={handleSend}
            disabled={message.trim().length === 0}
          >
            Send Request
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
