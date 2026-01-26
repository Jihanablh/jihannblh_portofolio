import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Database, Globe, Layers, Terminal } from 'lucide-react';

// KOMPONEN ANIMASI SCROLL (Reusable)
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="max-w-6xl mx-auto scroll-mt-28 px-4 mt-20 mb-20">
      
      {/* Header dengan Reveal */}
      <RevealOnScroll>
        <div className="flex flex-col mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-4 text-white">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg shadow-blue-900/20">
                    <Code className="text-blue-400" />
                </div>
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                    Technical Skills
                </span>
            </h2>
            <p className="text-slate-400 mt-4 ml-1 text-sm sm:text-base max-w-2xl leading-relaxed">
                A comprehensive overview of my technical stack, ranging from Data Engineering pipelines to Frontend development.
            </p>
        </div>
      </RevealOnScroll>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          
          <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
            <div className="group relative h-full">
              
              {/* 1. Background Glow (Di belakang kartu) */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-10 group-hover:opacity-60 transition duration-500 group-hover:duration-300`}></div>
              
              {/* 2. Kartu Utama */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-slate-600/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}></div>

                {/* Header Kartu */}
                <div className="relative flex items-center gap-4 mb-6 z-10">
                  <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-lg ${skill.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                        {skill.category}
                    </h3>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 rounded-full mt-1"></div>
                  </div>
                </div>

                {/* List Skill (Badges) */}
                <div className="relative flex flex-wrap gap-2 z-10">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm font-medium text-slate-400 bg-slate-800/40 border border-slate-700/50 rounded-lg 
                      hover:text-white hover:bg-slate-700 hover:border-slate-500/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5
                      transition-all duration-200 cursor-default select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}