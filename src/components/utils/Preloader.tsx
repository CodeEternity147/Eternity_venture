import { useEffect, useState } from 'react';
import logo from '../../assets/evlogo2.png';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(false), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md text-white">
      <div className="flex flex-col items-center gap-6 p-6 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">
        <img src={logo} alt="Eternity Ventures Preloader" className="w-28 h-28 object-contain animate-pulse" />
        <div className="text-center">
          <div className="text-xl font-bold tracking-wide">Eternity Ventures</div>
          <div className="text-sm text-slate-200/90">Loading your experience…</div>
        </div>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full w-12 animate-pulse bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
