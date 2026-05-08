import React from 'react';
import { Home, Search, MessageSquare, Briefcase, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/employer/home' },
    { id: 'search', icon: Search, label: 'Search', path: '/employer/search' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/employer/messages' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs', path: '/employer/jobs' },
    { id: 'profile', icon: User, label: 'Profile', path: '/employer/profile' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname.includes(item.path);
        
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center w-14 h-full space-y-1 transition-colors ${
              isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
