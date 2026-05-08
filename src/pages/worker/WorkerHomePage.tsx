import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Briefcase, MapPin, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function WorkerHomePage() {
  const navigate = useNavigate();
  const { currentUser } = useAppStore();

  const filters = ['Recommended', 'Recent', 'High Pay', 'Nearby'];

  const matchedJobs = [
    {
      id: 'j1',
      title: 'Senior Construction Helper',
      company: 'BuildRight Corp.',
      location: 'Cebu City, Philippines',
      salary: '₱800 - ₱1000 / day',
      matchScore: 92,
      urgent: true,
    },
    {
      id: 'j2',
      title: 'Site Mason',
      company: 'Metro Dev Builders',
      location: 'Mandaue City',
      salary: '₱900 / day',
      matchScore: 85,
      urgent: false,
    }
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-gray-50 relative">
      <div className="bg-white pt-6 pb-4 px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
           <div>
             <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
             <p className="text-gray-500 text-sm">Find your next opportunity.</p>
           </div>
           <button 
             onClick={() => navigate('/worker/profile')}
             className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden"
           >
             <img src="https://i.pravatar.cc/150?u=juan" alt="Profile" />
           </button>
        </div>
        
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full h-11 bg-gray-100 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
            />
          </div>
          <button className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="flex space-x-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {filters.map(f => (
            <Badge key={f} variant={f === 'Recommended' ? 'default' : 'outline'} className="whitespace-nowrap px-3 py-1">
              {f}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-20 space-y-4">
        {matchedJobs.map(job => (
          <div key={job.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 pr-4">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold text-gray-900">{job.title}</h3>
                  {job.urgent && <Badge variant="error" className="text-[9px] px-1.5 py-0">Urgent</Badge>}
                </div>
                <p className="text-xs text-gray-500 font-medium mb-1.5">{job.company}</p>
                <div className="flex items-center text-[10px] text-gray-400">
                  <MapPin size={10} className="mr-1" />
                  {job.location}
                </div>
              </div>
              <div className="flex flex-col items-center pl-2">
                <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center bg-blue-50">
                  <span className="text-xs font-bold text-primary">{job.matchScore}%</span>
                </div>
                <span className="text-[8px] font-semibold text-gray-400 uppercase mt-1 tracking-wider text-center">Match<br/>Score</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-2.5 flex items-center justify-between mb-4 border border-gray-100">
              <div className="flex items-center text-gray-600 text-xs font-medium">
                <Briefcase size={14} className="mr-1.5 text-gray-400" />
                {job.salary}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
                Save Job
              </button>
              <button className="flex-1 py-2 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* A simple bottom nav just for the worker home page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-2">
        <button className="flex flex-col items-center justify-center w-14 h-full space-y-1 text-primary">
          <Briefcase size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Jobs</span>
        </button>
        <button onClick={() => navigate('/worker/profile')} className="flex flex-col items-center justify-center w-14 h-full space-y-1 text-gray-400 hover:text-gray-600">
          <CheckCircle2 size={22} strokeWidth={2} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </PageTransition>
  );
}
