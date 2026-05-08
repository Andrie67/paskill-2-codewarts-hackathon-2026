import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Mail, Calendar, PhoneCall, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ConfidenceScoreMeter } from '../../components/ui/ConfidenceScoreMeter';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function WorkerProfileEmployerPOVPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mockWorkers } = useAppStore();
  
  const worker = mockWorkers.find(w => w.id === id) || mockWorkers[0];

  return (
    <PageTransition className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-primary/10 rounded-b-[40px] z-0"></div>
      
      <div className="pt-4 pb-2 px-6 flex items-center justify-between relative z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-white/50 transition-colors bg-white/30 backdrop-blur-md">
          <ArrowLeft size={24} />
        </button>
        <span className="font-bold text-gray-900">View Profile</span>
        <button className="p-2 -mr-2 text-primary rounded-full hover:bg-white/50 transition-colors">
          <ShieldCheck size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-6 relative z-10">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex items-center justify-between mb-6 mt-2">
          <div className="flex items-center">
            <img src={worker.avatarUrl} alt={worker.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary/20" />
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">{worker.name}</h1>
              <p className="text-sm font-medium text-gray-500 mb-1">{worker.category}</p>
              <div className="flex items-center text-xs text-primary font-semibold bg-blue-50 w-fit px-2 py-0.5 rounded-full">
                <CheckCircle2 size={12} className="mr-1" />
                Verified Worker
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pl-2 border-l border-gray-100">
            <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center mb-1">
              <span className="text-sm font-bold text-green-600">{worker.confidenceScore}%</span>
            </div>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center leading-none">Confidence<br/>Score</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-2">About</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hardworking and reliable {worker.category.toLowerCase()} with {worker.experienceYears} years of experience in {worker.location}. Fully verified through PaSkill identity and skill checks.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-gray-900 mb-3">Verified Skills</h2>
          <div className="flex flex-wrap gap-2">
            {worker.skills.map((skill, i) => (
              <Badge key={i} variant="outline" className="bg-gray-50">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
             <h2 className="font-bold text-gray-900">Proof Gallery</h2>
             <button className="text-xs font-semibold text-primary">View All</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
             {worker.uploadedEvidence.map((ev, i) => (
               <div key={i} className="w-28 h-20 rounded-xl bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-white text-xs font-semibold">View</span>
                  </div>
                  {ev.includes('gov') ? <span className="text-3xl">🪪</span> : 
                   ev.includes('cert') ? <span className="text-3xl">📜</span> : 
                   <span className="text-3xl">📸</span>}
               </div>
             ))}
          </div>
        </div>

        <div className="mb-6">
           <h2 className="font-bold text-gray-900 mb-3">Work History</h2>
           <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-gray-100">
                 <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 border-2 border-white"></div>
                 <h3 className="font-semibold text-gray-900 text-sm">Residential House Construction</h3>
                 <p className="text-xs text-gray-400 mb-1">Mar 2022 - Aug 2023</p>
                 <p className="text-sm text-gray-600">Role: Masonry and concrete works</p>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-100">
                 <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1 border-2 border-white"></div>
                 <h3 className="font-semibold text-gray-900 text-sm">Warehouse Renovation Project</h3>
                 <p className="text-xs text-gray-400 mb-1">Oct 2019 - Feb 2022</p>
                 <p className="text-sm text-gray-600">Role: Demolition and site cleanup</p>
              </div>
           </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
           <div>
             <h3 className="font-bold text-gray-900 text-sm mb-1">Basic Info</h3>
             <div className="flex items-center text-xs text-gray-600 mb-1">
                <Briefcase size={12} className="mr-1.5" />
                <span className="w-20">Experience</span>
                <span className="font-semibold text-gray-900">{worker.experienceYears} years</span>
             </div>
             <div className="flex items-center text-xs text-gray-600">
                <MapPin size={12} className="mr-1.5" />
                <span className="w-20">Location</span>
                <span className="font-semibold text-gray-900">{worker.location}</span>
             </div>
           </div>
           <button className="bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-primary shadow-sm border border-gray-100">
             Assess Evidence
           </button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-20 flex space-x-3">
         <button className="flex-1 py-3.5 rounded-2xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors">
            Save Worker
         </button>
         <button 
           onClick={() => navigate(`/employer/contact/${worker.id}`)}
           className="flex-[1.5] py-3.5 rounded-2xl bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
         >
            Contact / Hire
         </button>
      </div>
    </PageTransition>
  );
}
