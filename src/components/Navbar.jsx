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
          ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-2 shadow-lg' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12">
          
          {/*BAGIAN KIRI: LOGO NAMA */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/*JN*/}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              JN
            </div>
            {/* Teks Nama */}
            <span className="font-bold text-lg tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
              Jihan<span className="font-light text-slate-400 group-hover:text-blue-300">Nabilah</span>
            </span>
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