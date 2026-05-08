import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download, ShieldCheck, QrCode } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { PageTransition } from '../../layouts/PageTransition';

export default function DigitalPassportPage() {
  const navigate = useNavigate();

  return (
    <PageTransition className="flex flex-col h-full bg-[#1e293b] px-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[50%] bg-gradient-to-b from-primary/30 to-transparent blur-3xl rounded-full" />
      
      <div className="relative z-10 pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white/80 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-white text-center mb-1">Digital Worker Passport</h1>
        <p className="text-white/60 text-center mb-6 text-sm">Your verified worker passport is ready to share.</p>
        
        <div className="flex justify-center items-center mb-6">
           <span className="text-xs font-semibold text-white/40">Step 4 of 4</span>
        </div>

        {/* Passport Card */}
        <div className="bg-white rounded-3xl p-5 shadow-2xl shadow-black/20 text-gray-900 mb-6 flex-1 flex flex-col">
          
          <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center space-x-2">
               <img src="/logo.png" alt="PaSkill" className="h-8 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div className="bg-green-100 text-green-700 p-1.5 rounded-full">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <img 
              src="https://i.pravatar.cc/150?u=juan" 
              alt="Profile" 
              className="w-16 h-16 rounded-full border-2 border-gray-100 mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Juan Dela Cruz</h2>
              <p className="text-sm font-medium text-gray-500">Construction Worker</p>
              <p className="text-xs text-gray-400 mt-0.5">Cebu City, Philippines</p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Verified Skills Summary</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-200">Bricklaying</Badge>
              <Badge variant="outline" className="border-gray-200">Concrete Mixing</Badge>
              <Badge variant="outline" className="border-gray-200">Workplace Safety</Badge>
            </div>
          </div>

          <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-100">
             <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Assessment Date</p>
                <p className="text-xs font-semibold text-gray-900">Oct 26, 2024</p>
             </div>
             
             {/* Fake QR */}
             <div className="w-16 h-16 bg-gray-100 rounded-lg p-1 flex flex-wrap gap-0.5 relative">
                {/* Just a decorative fake QR block */}
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-[13px] h-[13px] ${Math.random() > 0.4 ? 'bg-black rounded-sm' : 'bg-transparent'}`} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[1px]">
                  <QrCode size={24} className="text-black drop-shadow-md" />
                </div>
             </div>
          </div>
          
          <div className="bg-gray-900 text-white text-[10px] py-1.5 px-3 -mx-5 -mb-5 mt-4 rounded-b-3xl flex justify-between">
             <span>*Official PaSkill Verified Profile</span>
             <span className="font-mono text-white/50">ID: PK-3904-8247</span>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
           <button className="bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-2xl flex flex-col items-center justify-center">
              <Share2 size={20} className="mb-2" />
              <span className="text-xs font-semibold">Share Passport</span>
           </button>
           <button className="bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-2xl flex flex-col items-center justify-center">
              <Download size={20} className="mb-2" />
              <span className="text-xs font-semibold">Download QR</span>
           </button>
        </div>

        <div className="pb-6">
          <Button 
            fullWidth 
            onClick={() => navigate('/worker/profile')}
            variant="outline"
            className="bg-white text-gray-900 hover:bg-gray-100 border-none"
          >
            Continue to Profile
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
