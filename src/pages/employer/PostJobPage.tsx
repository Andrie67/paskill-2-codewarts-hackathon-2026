import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, DollarSign, FileText } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';

export default function PostJobPage() {
  const navigate = useNavigate();
  const { addJob } = useAppStore();
  const [step, setStep] = useState(1);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleNext = () => setStep(2);
  
  const handlePublish = () => {
    addJob({
      title,
      category,
      salary,
      location,
      description,
      interestedWorkers: [] // will be mocked in the store
    });
    // Add brief delay to simulate network before routing back
    setTimeout(() => {
      navigate('/employer/home');
    }, 500);
  };

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => step === 1 ? navigate(-1) : setStep(1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Post a New Job</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">
          {step === 1 ? 'Step 1: Basic Information' : 'Step 2: Job Details'}
        </p>

        {/* Progress indicator */}
        <div className="w-full h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full" 
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pb-6 -mx-1 px-1">
          {step === 1 ? (
            <>
              <Input 
                label="Job Title" 
                placeholder="e.g. Senior Mason" 
                icon={<Briefcase size={16} />}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input 
                label="Category" 
                placeholder="e.g. Construction" 
                icon={<Briefcase size={16} />}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Input 
                label="Salary Rate" 
                placeholder="e.g. ₱800 / day" 
                icon={<DollarSign size={16} />}
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <Input 
                label="Location" 
                placeholder="e.g. Cebu City" 
                icon={<MapPin size={16} />}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </>
          ) : (
            <>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                 <div className="relative">
                    <FileText size={16} className="absolute left-3 top-3 text-gray-400" />
                    <textarea 
                      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[150px]"
                      placeholder="Describe the job requirements, responsibilities, and schedule..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                 </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
                 <h3 className="text-sm font-bold text-gray-900 mb-1">Worker Match Preview</h3>
                 <p className="text-xs text-gray-600">Once published, PaSkill will automatically notify verified workers matching your requirements.</p>
              </div>
            </>
          )}
        </div>

        <div className="pt-4 pb-6 space-y-3 bg-white">
          {step === 1 ? (
            <Button 
              fullWidth 
              onClick={handleNext}
              disabled={!title || !category}
            >
              Next Step
            </Button>
          ) : (
            <Button 
              fullWidth 
              onClick={handlePublish}
              disabled={!description}
            >
              Publish Job Post
            </Button>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
