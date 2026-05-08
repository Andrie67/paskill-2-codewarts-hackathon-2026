import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PageTransition } from '../../layouts/PageTransition';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      <div className="pt-4 pb-6 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-center mb-6">
           <div className="w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-xl">
              <span className="text-3xl font-extrabold text-primary">P</span>
           </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Create your account</h1>
        <p className="text-gray-500 text-center mb-8">Start your verified work journey with PaSkill.</p>

        <form className="space-y-4 mb-6 flex-1">
          <Input 
            type="text" 
            placeholder="Full name" 
            icon={<User size={18} />}
          />
          <Input 
            type="email" 
            placeholder="Email" 
            icon={<Mail size={18} />}
          />
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              icon={<Lock size={18} />}
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-start mt-6 space-x-3">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary accent-primary" 
              defaultChecked
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-snug">
              I agree to the <span className="font-semibold text-primary">Terms & Privacy Policy</span>
            </label>
          </div>

          <div className="pt-6">
            <Button fullWidth onClick={(e) => { e.preventDefault(); navigate('/auth/role'); }}>
              Create Account
            </Button>
          </div>
        </form>
      </div>

      <div className="py-6 flex justify-center">
        <span className="text-sm text-gray-500">
          Already have an account?{' '}
          <button onClick={() => navigate('/auth/login')} className="text-primary font-semibold hover:underline">
            Log in
          </button>
        </span>
      </div>
    </PageTransition>
  );
}
