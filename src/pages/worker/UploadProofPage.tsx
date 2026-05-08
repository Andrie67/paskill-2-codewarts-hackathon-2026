import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserSquare2, FileText, Image as ImageIcon, Video, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PageTransition } from '../../layouts/PageTransition';

export default function UploadProofPage() {
  const navigate = useNavigate();
  // We'll simulate file upload states
  const [uploads, setUploads] = useState<Record<string, boolean>>({});

  const toggleUpload = (id: string) => {
    setUploads(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const uploadOptions = [
    { id: 'id', title: 'Government ID', desc: 'Upload a valid ID for identity verification.', icon: <UserSquare2 size={24} className="text-gray-500" /> },
    { id: 'cert', title: 'Certificates (Optional)', desc: 'Add training or skill certificates if available.', icon: <FileText size={24} className="text-gray-500" /> },
    { id: 'photo', title: 'Previous Work Photos', desc: 'Upload photos of workplace activity if any.', icon: <ImageIcon size={24} className="text-gray-500" /> },
    { id: 'video', title: 'Simple Task Photo / Video', desc: 'Example: a photo or video of you doing the task.', icon: <Video size={24} className="text-primary" />, highlighted: true },
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Upload Proof</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Add your documents and work samples for verification.</p>

        {/* Progress indicator */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <span className="text-xs font-semibold text-gray-400">Step 3 of 4</span>
        </div>

        <div className="space-y-4 flex-1">
          {uploadOptions.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => toggleUpload(opt.id)}
              className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                opt.highlighted ? 'border-primary bg-blue-50/30' : 'border-gray-100 bg-white shadow-sm'
              }`}
            >
              <div className="mr-4 flex-shrink-0">
                {opt.icon}
              </div>
              <div className="flex-1 pr-4">
                <h3 className={`font-bold text-sm ${opt.highlighted ? 'text-primary' : 'text-gray-900'}`}>{opt.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{opt.desc}</p>
              </div>
              <button 
                className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                  uploads[opt.id] ? 'bg-primary border-primary text-white' : 'border-gray-300 text-gray-400'
                }`}
              >
                <Plus size={16} className={uploads[opt.id] ? 'rotate-45' : ''} style={{ transition: 'transform 0.2s' }} />
              </button>
            </div>
          ))}
        </div>

        <div className="pt-4 pb-6 space-y-3">
          <Button 
            fullWidth 
            onClick={() => navigate('/worker/passport')}
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
