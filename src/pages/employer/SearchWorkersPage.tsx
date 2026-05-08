import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { BottomNavigation } from '../../components/ui/BottomNavigation';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function SearchWorkersPage() {
  const navigate = useNavigate();
  const { mockWorkers } = useAppStore();

  const filters = ['Construction', 'Gardening', 'Welding', 'Verified', 'Nearby'];

  return (
    <PageTransition className="flex flex-col h-full bg-gray-50 relative">
      <div className="bg-white pt-6 pb-4 px-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Search workers</h1>
        <p className="text-gray-500 text-sm mb-4">Find perfect workers that match your hiring needs.</p>
        
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search skills, categories, or location..." 
              className="w-full h-11 bg-gray-100 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
            />
          </div>
          <button className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="flex space-x-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {filters.map(f => (
            <Badge key={f} variant={f === 'Verified' ? 'success' : 'outline'} className="whitespace-nowrap px-3 py-1">
              {f}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-20 space-y-4">
        {mockWorkers.map(worker => (
          <div key={worker.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <img src={worker.avatarUrl} alt={worker.name} className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900">{worker.name}</h3>
                  <p className="text-xs text-gray-500">{worker.category}</p>
                  <div className="flex items-center mt-0.5 space-x-1">
                    <MapPin size={10} className="text-gray-400" />
                    <span className="text-[10px] text-gray-400">{worker.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">{worker.confidenceScore}%</span>
                </div>
                <span className="text-[8px] font-semibold text-gray-400 uppercase mt-1 tracking-wider">Confidence</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
               {worker.isVerified && <Badge variant="success" className="text-[10px]">✓ Verified</Badge>}
               <Badge variant="outline" className="text-[10px]">{worker.experienceYears} yrs exp</Badge>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
                Save
              </button>
              <button 
                onClick={() => navigate(`/employer/worker/${worker.id}`)}
                className="flex-1 py-2 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </PageTransition>
  );
}
