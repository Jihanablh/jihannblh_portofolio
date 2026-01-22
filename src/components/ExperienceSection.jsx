import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, Briefcase, GraduationCap, Users, Calendar, ArrowUpRight 
} from 'lucide-react';

// --- VERSI LEBIH RESPONSIF ---
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // PERUBAHAN 1: Pakai isIntersecting langsung tanpa threshold ketat
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        // PERUBAHAN 2: Threshold 0 (begitu nongol dikit langsung trigger)
        // RootMargin -20px biar ada jeda dikit banget biar ga kaget, tapi tetep cepet
        threshold: 0, 
        rootMargin: "0px 0px -20px 0px" 
      } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // PERUBAHAN 3: duration-500 (lebih ngebut dari sebelumnya 700)
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-8 filter blur-[2px]"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="max-w-5xl mx-auto scroll-mt-28 mt-20 px-4">
      
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
      
      <div className="relative ml-3 md:ml-6 space-y-12">
        <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900/0"></div>

        {experience.map((exp, idx) => (
          // PERUBAHAN 4: Delay multiplier dikurangi jadi 100ms (lebih rapet)
          <RevealOnScroll key={idx} delay={idx * 100} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-6 z-20 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-20 animate-ping group-hover:opacity-40 duration-1000"></span>
                <div className="w-3 h-3 bg-slate-900 rounded-full border-2 border-slate-600 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
            </div>

            {/* Card Content */}
            <div className="relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-1 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]">
              
              <div className="bg-slate-950/50 rounded-xl p-6 md:p-8 h-full">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {exp.role}
                      <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                    </h3>
                    
                    <div className="flex items-center gap-2 text-slate-400 font-medium text-sm sm:text-base">
                      <span className={`p-1.5 rounded-lg ${
                        exp.type === 'Professional' ? 'bg-blue-500/10 text-blue-400' :
                        exp.type === 'Academic' ? 'bg-purple-500/10 text-purple-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        {exp.type === 'Professional' && <Briefcase size={14} />}
                        {exp.type === 'Academic' && <GraduationCap size={14} />}
                        {(exp.type === 'Organization' || exp.type === 'Community') && <Users size={14} />}
                      </span>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700 w-fit h-fit whitespace-nowrap group-hover:border-blue-500/30 group-hover:text-blue-200 transition-colors">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <blockquote className="relative mb-6 pl-4 border-l-2 border-slate-700 italic text-slate-400 text-sm leading-relaxed group-hover:border-blue-500/50 group-hover:text-slate-300 transition-colors">
                  "{exp.summary}"
                </blockquote>

                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    Key Impact <span className="h-px flex-1 bg-slate-800"></span>
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 group-hover/item:bg-blue-400 group-hover/item:scale-150 transition-all"></div>
                        <span className="leading-relaxed opacity-90 group-hover/item:opacity-100 transition-opacity">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900 text-slate-400 rounded-md text-xs font-medium border border-slate-800 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default select-none">
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