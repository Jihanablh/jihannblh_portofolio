import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, Briefcase, GraduationCap, Users, Calendar, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

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
      { 
        threshold: 0, 
        rootMargin: "0px 0px -50px 0px" 
      } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="max-w-5xl mx-auto scroll-mt-28 mt-20 px-4 mb-24">
      
      {/* HEADER (Sesuai Request: Tidak Diubah) */}
      <RevealOnScroll>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg shadow-blue-900/20">
             <Award className="text-blue-400 w-8 h-8" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Experience & Leadership
          </span>
        </h2>
      </RevealOnScroll>
      
      {/* TIMELINE CONTAINER */}
      <div className="relative ml-3 md:ml-6 space-y-12">
        {/* Garis Vertikal (Lebih Halus) */}
        <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/20 via-slate-700/20 to-transparent"></div>

        {experience.map((exp, idx) => (
          <RevealOnScroll key={idx} delay={idx * 150} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot (Dipercantik) */}
            <div className="absolute -left-[6px] top-6 z-20">
               <div className="w-3.5 h-3.5 bg-slate-900 rounded-full border-2 border-slate-600 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)] relative z-10"></div>
               {/* Ping Effect */}
               <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-0 group-hover:opacity-30 duration-1000"></div>
            </div>

            {/* CARD UTAMA (UI UPGRADE) */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-blue-500/30 hover:via-blue-500/10 hover:to-transparent transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-blue-900/10">
              
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 h-full relative overflow-hidden">
                
                {/* Background Glow Halus */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>

                {/* --- CONTENT HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                  <div className="space-y-1">
                    
                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {exp.role}
                      <ArrowUpRight size={18} className="opacity-50 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                    </h3>
                    
                    {/* Company & Type */}
                    <div className="flex items-center gap-3 text-slate-400 text-sm sm:text-base">
                      <span className="font-medium text-slate-300">{exp.company}</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                        exp.type === 'Professional' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' :
                        exp.type === 'Academic' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' :
                        'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      } flex items-center gap-1.5`}>
                        {exp.type === 'Professional' && <Briefcase size={12} />}
                        {exp.type === 'Academic' && <GraduationCap size={12} />}
                        {(exp.type === 'Organization' || exp.type === 'Community') && <Users size={12} />}
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/50 group-hover:text-white group-hover:border-slate-600 transition-colors">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                {/* --- SUMMARY (Blockquote Modern) --- */}
                <div className="relative mb-6 pl-4 border-l-2 border-slate-700/50 italic text-slate-400 text-sm leading-relaxed group-hover:border-blue-500/50 group-hover:text-slate-300 transition-colors">
                  <p>"{exp.summary}"</p>
                </div>

                {/* --- KEY IMPACT (List with Icons) --- */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-blue-500/50"></span>
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Key Impact & Responsibilities</h4>
                  </div>
                  
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                        <CheckCircle2 size={16} className="text-blue-500/70 mt-0.5 flex-shrink-0 group-hover/item:text-blue-400 transition-colors" />
                        <span className="leading-relaxed opacity-90 group-hover/item:opacity-100 transition-opacity">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- TECH STACK (Modern Pills) --- */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/50">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 text-slate-400 rounded-full text-xs font-medium border border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                    >
                      {tech}
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