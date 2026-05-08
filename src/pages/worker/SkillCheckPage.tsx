import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PageTransition } from '../../layouts/PageTransition';

export default function SkillCheckPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Mocking the second question out of 6
  const currentQuestion = 2;
  const totalQuestions = 6;
  const progressPercent = (currentQuestion / totalQuestions) * 100;

  const options = [
    "Helmet, Gloves, Safety Shoes",
    "Cap, Mask, Sandals",
    "Gloves, Sunglasses, Boots",
    "Hat, Apron, Glasses"
  ];

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col pt-2">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Skill Check</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Let's evaluate your skills.</p>

        <div className="flex justify-between items-end mb-2">
          <span className="font-bold text-gray-900">Construction Helper</span>
          <span className="text-sm font-medium text-gray-500">{currentQuestion} of {totalQuestions}</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="bg-blue-50/50 rounded-2xl p-5 mb-6 border border-blue-100 flex items-start space-x-3">
          <div className="text-2xl pt-1">🛠️</div>
          <div>
             <h3 className="font-bold text-gray-900 mb-2 leading-snug">Which safety gear is essential on a construction site?</h3>
             <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select the correct answer</p>
          </div>
        </div>

        <div className="space-y-3 flex-1">
          {options.map((opt, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selectedOption === index 
                  ? 'border-primary bg-blue-50/50 text-primary font-semibold' 
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              } flex items-center`}
            >
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                selectedOption === index ? 'border-primary' : 'border-gray-300'
              }`}>
                {selectedOption === index && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
              </div>
              <span className="text-sm">{opt}</span>
            </button>
          ))}
        </div>

        <div className="pt-4 pb-6 space-y-3">
          <Button 
            fullWidth 
            disabled={selectedOption === null}
            onClick={() => navigate('/worker/upload-proof')}
          >
            Next
          </Button>
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>
    </PageTransition>
  );
}
