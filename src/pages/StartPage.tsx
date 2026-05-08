import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../layouts/PageTransition';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <PageTransition className="flex flex-col items-center justify-center px-6 text-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Logo Mockup */}
        <div className="mb-8">
          <img src="/logo.png" alt="PaSkill" className="w-40 mx-auto object-contain drop-shadow-lg" onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
      </div>
      
      <div className="w-full pb-8">
        <Button 
          fullWidth 
          size="lg" 
          onClick={() => navigate('/auth/role')}
          className="mb-4"
        >
          Get Started
        </Button>
        <button 
          onClick={() => navigate('/auth/role?mode=login')}
          className="text-sm font-semibold text-primary hover:text-blue-800 hover:underline transition-colors py-2 px-4 rounded-full"
        >
          I already have an account
        </button>
      </div>
    </PageTransition>
  );
}
