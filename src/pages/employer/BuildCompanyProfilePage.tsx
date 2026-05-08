import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, Briefcase, MapPin, Users, FileText, Globe } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PageTransition } from '../../layouts/PageTransition';

export default function BuildCompanyProfilePage() {
  const navigate = useNavigate();

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Build company profile</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Help workers know who you are.</p>

        {/* Progress indicator */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
          <div className="w-8 h-px bg-primary"></div>
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
          <div className="w-8 h-px bg-gray-200"></div>
          <div className="w-6 h-6 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">3</div>
          <div className="w-8 h-px bg-gray-200"></div>
          <div className="w-6 h-6 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">4</div>
        </div>

        <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pb-6 -mx-1 px-1">
          <div className="flex items-center p-4 rounded-xl border border-gray-200 bg-white">
             <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mr-4">
               <ImageIcon size={20} />
             </div>
             <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Company logo</p>
                <p className="text-xs text-gray-500">Upload your company logo</p>
             </div>
             <button className="text-primary bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">
               <span className="text-xl">+</span>
             </button>
          </div>

          <Input placeholder="Select industry" label="Industry" icon={<Briefcase size={16}/>} />
          <Input placeholder="Select location" label="Location" icon={<MapPin size={16}/>} />
          <Input placeholder="Select size" label="Company size" icon={<Users size={16}/>} />
          
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Short description</label>
             <div className="relative">
                <FileText size={16} className="absolute left-3 top-3 text-gray-400" />
                <textarea 
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[80px]"
                  placeholder="Tell us about your company..."
                />
             </div>
          </div>
          
          <Input placeholder="Add website link (optional)" label="Website / company page" icon={<Globe size={16}/>} />
        </div>

        <div className="pt-4 pb-6 space-y-3 bg-white">
          <Button 
            fullWidth 
            onClick={() => navigate('/employer/search')}
          >
            Continue
          </Button>
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </PageTransition>
  );
}
