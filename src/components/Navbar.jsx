import React, { useState, useEffect } from 'react';
import { Users, Award, Briefcase, Code, Trophy } from 'lucide-react';

export default function Navbar({ activeTab, scrollToSection }) {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Trophy }
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-10">
          
          {/* BAGIAN KIRI: CUSTOM NAME (jihannblh Porto) */}
          <div 
            className="cursor-pointer group select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight transition-colors duration-300">
              <span className="group-hover:text-blue-400 transition-colors">Jihannblh</span>
              
              <span className="ml-1 text-blue-500 font-normal">Porto</span>
              
              <span className="text-blue-500 animate-pulse">.</span>
            </h1>
          </div>

          {/* BAGIAN KANAN: MENU */}
          <div className="flex gap-1 sm:gap-4 overflow-x-auto scrollbar-hide pl-4">
            {navItems.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative py-1.5 px-3 font-medium transition-all whitespace-nowrap flex items-center gap-2 text-sm rounded-full hover:bg-white/10 ${
                    activeTab === tab.id
                      ? 'text-white bg-white/10 shadow-sm ring-1 ring-white/10' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon size={16} className={activeTab === tab.id ? 'text-blue-400' : ''} />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}