import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, HardHat, Briefcase, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { PageTransition } from '../../layouts/PageTransition';
import { useAppStore } from '../../store/useAppStore';
import type { Role } from '../../store/useAppStore';

export default function RoleSelectionPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const { setRole } = useAppStore();

  const handleContinue = () => {
    if (!selectedRole) return;
    setRole(selectedRole);
    
    if (mode === 'login') {
      // Skip auth creation, go straight to dashboard
      if (selectedRole === 'worker') {
        navigate('/worker/home');
      } else {
        navigate('/employer/search');
      }
    } else {
      // Normal registration flow
      if (selectedRole === 'worker') {
        navigate('/worker/category');
      } else {
        navigate('/employer/create-profile');
      }
    }
  };

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-4 flex items-center justify-center relative">
        <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-lg">
          <span className="text-xl font-bold text-primary">P</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">I am a...</h1>
        <p className="text-gray-500 mb-8 font-medium">Choose the option that best describes you.</p>

        <div className="space-y-4 flex-1">
          <Card 
            variant="outline"
            selected={selectedRole === 'worker'}
            onClick={() => setSelectedRole('worker')}
            className="relative flex items-center p-5"
          >
            {selectedRole === 'worker' && (
              <div className="absolute top-4 right-4 text-primary">
                <CheckCircle2 className="w-6 h-6 fill-primary text-white" />
              </div>
            )}
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
              <HardHat className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Blue-Collar Worker</h3>
              <p className="text-sm text-gray-500 mt-1">I offer hands-on skills and get work done.</p>
            </div>
          </Card>

          <Card 
            variant="outline"
            selected={selectedRole === 'employer'}
            onClick={() => setSelectedRole('employer')}
            className="relative flex items-center p-5"
          >
            {selectedRole === 'employer' && (
              <div className="absolute top-4 right-4 text-primary">
                <CheckCircle2 className="w-6 h-6 fill-primary text-white" />
              </div>
            )}
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Employer</h3>
              <p className="text-sm text-gray-500 mt-1">I hire workers for projects and jobs.</p>
            </div>
          </Card>
        </div>

        <div className="pt-6 pb-8">
          <Button 
            fullWidth 
            onClick={handleContinue}
            disabled={!selectedRole}
          >
            Continue
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
