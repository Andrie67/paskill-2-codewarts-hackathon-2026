import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PageTransition } from '../../layouts/PageTransition';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageTransition className="flex flex-col h-full bg-white px-6">
      {/* Header */}
      <div className="pt-4 pb-6 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center mb-6">
           <div className="w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-xl relative">
              <span className="text-3xl font-extrabold text-primary">P</span>
           </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Welcome back</h1>
        <p className="text-gray-500 text-center mb-8">Log in to continue building your work profile.</p>

        <form className="space-y-4 mb-6">
          <Input 
            type="email" 
            placeholder="Email" 
            autoComplete="email"
          />
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              autoComplete="current-password"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          <div className="pt-4">
            <Button fullWidth onClick={(e) => { e.preventDefault(); navigate('/worker/dashboard'); }}>
              Log In
            </Button>
          </div>
        </form>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400 font-medium uppercase">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <Button variant="outline" fullWidth className="font-medium text-gray-700 relative">
          <svg className="w-5 h-5 absolute left-6" viewBox="0 0 24 24">
             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </Button>
      </div>

      <div className="py-6 flex justify-center">
        <span className="text-sm text-gray-500">
          Don't have an account?{' '}
          <button onClick={() => navigate('/auth/register')} className="text-primary font-semibold hover:underline">
            Sign up
          </button>
        </span>
      </div>
    </PageTransition>
  );
}
