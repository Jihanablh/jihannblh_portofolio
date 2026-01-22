import React from 'react';
import { Users, Award, Briefcase, Code, Trophy } from 'lucide-react';

export default function Navbar({ activeTab, scrollToSection }) {
  
  // Daftar Menu Navigasi
  const navItems = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Trophy }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-end items-center h-16">
          <div className="flex gap-1 sm:gap-6 overflow-x-auto scrollbar-hide">
            {navItems.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`py-2 px-3 font-medium transition-all whitespace-nowrap flex items-center gap-2 text-sm rounded-lg hover:bg-white/5 ${
                    activeTab === tab.id
                      ? 'text-blue-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}