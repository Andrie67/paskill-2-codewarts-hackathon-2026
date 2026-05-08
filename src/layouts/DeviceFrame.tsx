import { ReactNode, useEffect, useState } from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

interface DeviceFrameProps {
  children: ReactNode;
}

export default function DeviceFrame({ children }: DeviceFrameProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background-light flex items-center justify-center py-8">
      {/* Phone container */}
      <div 
        className="relative w-[393px] h-[852px] bg-white rounded-[55px] shadow-2xl overflow-hidden"
        style={{
          boxShadow: '0 0 0 14px #0f0f0f, 0 0 0 15px #3a3a3a, 0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-between px-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#0a0a0a] ml-1 opacity-50 shadow-inner"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#121212] mr-1 flex items-center justify-center">
             <div className="w-[6px] h-[6px] rounded-full bg-[#080808] opacity-80"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-7 z-40 text-black pointer-events-none">
          <div className="font-semibold text-[15px] pt-1">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
          </div>
          <div className="flex items-center space-x-1.5 pt-1">
            <Signal size={16} strokeWidth={2.5} />
            <Wifi size={16} strokeWidth={2.5} />
            <Battery size={24} strokeWidth={2} />
          </div>
        </div>

        {/* App Content Area */}
        <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar pb-8 pt-12">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
