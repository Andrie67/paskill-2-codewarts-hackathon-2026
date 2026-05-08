import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit3, Settings } from 'lucide-react';
import { ConfidenceScoreMeter } from '../../components/ui/ConfidenceScoreMeter';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { PageTransition } from '../../layouts/PageTransition';

export default function ProfilePage() {
  const navigate = useNavigate();

  const metrics = [
    { label: 'Reliability', value: 92 },
    { label: 'Work Quality', value: 85 },
    { label: 'Responsiveness', value: 78 },
    { label: 'Safety Compliance', value: 95 },
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-white relative">
      {/* Header Area */}
      <div className="bg-gray-50 pt-4 pb-16 px-6 relative border-b border-gray-100">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/auth/role')} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-gray-900">Your Skill Evaluation</h1>
          <button className="p-2 -mr-2 text-gray-900 rounded-full hover:bg-gray-200 transition-colors">
            <Settings size={24} />
          </button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">Completed on Oct 26, 2024, 10:30 AM</p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 relative -mt-10 overflow-y-auto no-scrollbar pb-8">
        
        {/* Profile Info Card */}
        <Card className="flex flex-col items-center pt-10 pb-6 px-4 mb-6 shadow-md relative">
          <div className="absolute -top-10 bg-white p-1 rounded-full shadow-sm">
            <img 
              src="https://i.pravatar.cc/150?u=juan" 
              alt="Juan Dela Cruz" 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <Edit3 size={18} />
          </button>
          <h2 className="text-xl font-bold text-gray-900">Juan Dela Cruz</h2>
          <p className="text-sm font-medium text-gray-500">Construction Helper</p>
          <div className="flex items-center mt-1 space-x-1">
             <span className="text-xs text-gray-400">📍 Cebu City</span>
             <span className="text-xs text-gray-300">•</span>
             <span className="text-xs text-primary font-semibold">Verified</span>
          </div>
        </Card>

        {/* Confidence Score Section */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Overall Confidence</h3>
          <div className="flex justify-center">
            <ConfidenceScoreMeter score={82} size={140} strokeWidth={14} />
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="mb-8">
           <h3 className="font-bold text-gray-900 mb-4">Detailed Metrics</h3>
           <div className="space-y-4">
             {metrics.map((metric, i) => (
               <div key={i}>
                 <div className="flex justify-between text-sm mb-1.5">
                   <span className="font-medium text-gray-700">{metric.label}</span>
                   <span className="font-bold text-gray-900">{metric.value}%</span>
                 </div>
                 <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${metric.value}%` }} 
                    />
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Evidence Gallery Preview */}
        <div>
           <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-gray-900">Evidence Gallery</h3>
             <button className="text-xs font-semibold text-primary">View All</button>
           </div>
           <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2 -mx-2 px-2">
              <div className="w-24 h-24 rounded-xl bg-gray-100 flex-shrink-0 flex flex-col items-center justify-center border border-gray-200">
                 <span className="text-2xl mb-1">📄</span>
                 <span className="text-[10px] text-gray-500 font-medium">Gov ID</span>
              </div>
              <div className="w-24 h-24 rounded-xl bg-gray-100 flex-shrink-0 flex flex-col items-center justify-center border border-gray-200">
                 <span className="text-2xl mb-1">📜</span>
                 <span className="text-[10px] text-gray-500 font-medium">Certificate</span>
              </div>
              <div className="w-24 h-24 rounded-xl bg-gray-100 flex-shrink-0 flex flex-col items-center justify-center border border-gray-200">
                 <span className="text-2xl mb-1">📸</span>
                 <span className="text-[10px] text-gray-500 font-medium">Work Photo</span>
              </div>
           </div>
        </div>

        <div className="pt-8 pb-6">
          <Button 
            fullWidth 
            onClick={() => navigate('/worker/home')}
          >
            Proceed to Home Page
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
