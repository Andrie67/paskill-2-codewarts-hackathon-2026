import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, MapPin, CheckCircle2, MoreHorizontal, Users, Briefcase } from 'lucide-react';
import { BottomNavigation } from '../../components/ui/BottomNavigation';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function EmployerHomePage() {
  const navigate = useNavigate();
  const { mockJobs } = useAppStore();

  const workerPosts = [
    {
      id: 'p1',
      workerId: 'w1',
      name: 'Juan Dela Cruz',
      avatar: 'https://i.pravatar.cc/150?u=juan',
      role: 'Construction Worker',
      location: 'Cebu City',
      isVerified: true,
      time: '2 hours ago',
      content: 'Just finished a 3-month residential construction project. I am now available for new masonry and concrete work! I have all my safety gear ready.',
      likes: 12,
      comments: 3
    },
    {
      id: 'p2',
      workerId: 'w2',
      name: 'Maria Santos',
      avatar: 'https://i.pravatar.cc/150?u=maria',
      role: 'Gardener',
      location: 'Mandaue City',
      isVerified: true,
      time: '5 hours ago',
      content: 'Looking for part-time landscaping or garden maintenance jobs this weekend. Here are some photos of my recent work!',
      likes: 8,
      comments: 1
    }
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-gray-50 relative">
      <div className="bg-white pt-6 pb-4 px-6 border-b border-gray-100 flex justify-between items-center z-10">
        <div>
           <img src="/logo.png" alt="PaSkill" className="h-8 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
           <h1 className="text-xl font-bold text-gray-900 mt-1">Employer Dashboard</h1>
        </div>
        <button className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
           <img src="https://i.pravatar.cc/150?u=employer" alt="Profile" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-20 space-y-5">
        
        {/* Post a Job Section */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
           <h2 className="font-bold text-gray-900 mb-3 text-sm">Quick Actions</h2>
           <button 
             onClick={() => navigate('/employer/post-job')}
             className="w-full flex items-center justify-center py-3 rounded-xl border-2 border-dashed border-primary bg-blue-50/50 text-primary hover:bg-blue-50 transition-colors"
           >
              <Plus size={20} className="mr-2" />
              <span className="font-bold text-sm">Post a New Job</span>
           </button>
        </div>

        {/* Your Active Jobs Section */}
        {mockJobs.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
               <h2 className="font-bold text-gray-900 text-sm">Your Active Jobs</h2>
            </div>
            <div className="space-y-3">
              {mockJobs.map(job => (
                <div key={job.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                   <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                        <div className="flex items-center text-[10px] text-gray-500 font-medium mt-0.5">
                          <Briefcase size={10} className="mr-1" />
                          {job.category} • {job.datePosted}
                        </div>
                      </div>
                   </div>
                   
                   <div className="mt-3">
                      <button 
                        onClick={() => navigate(`/employer/jobs/${job.id}/interested`)}
                        className="w-full py-2.5 bg-blue-50 text-primary font-semibold text-xs rounded-xl hover:bg-blue-100 transition-colors flex justify-center items-center"
                      >
                         <Users size={14} className="mr-1.5" />
                         Interested Workers ({job.interestedWorkers.length})
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-2">
           <h2 className="font-bold text-gray-900 text-sm">Recent Worker Posts</h2>
        </div>

        {/* Worker Posts Feed */}
        <div className="space-y-4">
          {workerPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
               <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center cursor-pointer" onClick={() => navigate(`/employer/worker/${post.workerId}`)}>
                     <img src={post.avatar} alt={post.name} className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200" />
                     <div>
                        <div className="flex items-center">
                           <h3 className="font-bold text-gray-900 text-sm mr-1">{post.name}</h3>
                           {post.isVerified && <CheckCircle2 size={12} className="text-green-500" />}
                        </div>
                        <p className="text-[10px] text-gray-500 font-medium">{post.role} • {post.time}</p>
                     </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                     <MoreHorizontal size={16} />
                  </button>
               </div>
               
               <p className="text-sm text-gray-700 leading-relaxed mb-3">
                 {post.content}
               </p>

               <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex space-x-4">
                     <button className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors">Like ({post.likes})</button>
                     <button className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors">Comment ({post.comments})</button>
                  </div>
                  <button 
                    onClick={() => navigate(`/employer/messages/${post.workerId}`)}
                    className="text-xs font-bold text-primary bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    Message
                  </button>
               </div>
            </div>
          ))}
        </div>

      </div>

      <BottomNavigation />
    </PageTransition>
  );
}
