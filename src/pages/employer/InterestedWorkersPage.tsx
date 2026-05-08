import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function InterestedWorkersPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mockJobs, mockWorkers } = useAppStore();

  const job = mockJobs.find(j => j.id === id);
  
  if (!job) {
    return <div className="p-8 text-center text-gray-500">Job not found</div>;
  }

  // Filter workers who are interested
  const interestedWorkersList = mockWorkers.filter(w => job.interestedWorkers.includes(w.id));

  return (
    <PageTransition className="flex flex-col h-full bg-gray-50 relative">
      <div className="bg-white pt-6 pb-4 px-6 border-b border-gray-100">
        <div className="flex items-center mb-4">
           <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors mr-2">
             <ArrowLeft size={20} />
           </button>
           <div>
             <h1 className="text-xl font-bold text-gray-900">Interested Workers</h1>
           </div>
        </div>
        
        <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100">
           <h2 className="text-sm font-semibold text-primary truncate">{job.title}</h2>
           <p className="text-xs text-gray-500">{interestedWorkersList.length} workers have expressed interest</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-20 space-y-4">
        {interestedWorkersList.map(worker => (
          <div key={worker.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <img src={worker.avatarUrl} alt={worker.name} className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{worker.name}</h3>
                  <p className="text-xs text-gray-500">{worker.category}</p>
                  <div className="flex items-center mt-0.5 space-x-1">
                    <MapPin size={10} className="text-gray-400" />
                    <span className="text-[10px] text-gray-400">{worker.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center pl-2">
                <div className="w-9 h-9 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">{worker.confidenceScore}%</span>
                </div>
                <span className="text-[8px] font-semibold text-gray-400 uppercase mt-1 tracking-wider text-center">Score</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
               {worker.isVerified && <Badge variant="success" className="text-[10px]">✓ Verified</Badge>}
               <Badge variant="outline" className="text-[10px]">{worker.experienceYears} yrs exp</Badge>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => navigate(`/employer/worker/${worker.id}`)}
                className="flex-1 py-2 rounded-xl bg-gray-100 text-gray-900 font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                View Profile
              </button>
              <button 
                onClick={() => navigate(`/employer/messages/${worker.id}`)}
                className="flex-1 py-2 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Message
              </button>
            </div>
          </div>
        ))}

        {interestedWorkersList.length === 0 && (
           <div className="text-center py-10">
             <div className="text-4xl mb-3">👀</div>
             <h3 className="text-sm font-bold text-gray-900">No interested workers yet</h3>
             <p className="text-xs text-gray-500 mt-1">Check back later when PaSkill matches workers to your job post.</p>
           </div>
        )}
      </div>
    </PageTransition>
  );
}
