import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, MapPin, Database, Code, GraduationCap, Briefcase 
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
      { threshold: 0.1 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 filter blur-0"
          : "opacity-0 translate-y-12 filter blur-sm"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto mt-20 mb-20 max-w-7xl scroll-mt-28 px-5 sm:px-8 lg:px-10">
      
      <RevealOnScroll delay={0}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
          <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shadow-lg shadow-blue-900/20">
            <Users className="text-blue-400" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">            
        
        <div className="lg:col-span-2 h-full">
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden h-full shadow-2xl hover:shadow-blue-500/10">
              
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full transition-all duration-700"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 border-b border-white/5 pb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                      Hi, I'm Jihan
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Aspiring Data Analyst & Business Analyst
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-xs font-semibold text-blue-200 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 transition-colors cursor-default">
                    <MapPin size={14} className="animate-bounce" /> Jakarta, ID
                  </span>
                </div>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed flex-grow">
                  <p className="text-justify">
                    Saya adalah mahasiswa semester 6 <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4 decoration-2">Sistem Informasi</span> di Universitas Bakrie, dengan minat kuat pada analisis data dan penerjemahan insight menjadi strategi bisnis yang berdampak.
                  </p>
                  <p className="text-justify">
                    Saya telah menyelesaikan magang sebagai <span className="text-purple-300 font-semibold bg-purple-500/10 px-1 rounded">Data Analyst Intern</span> di Vinix7, berfokus pada analisis data, pembuatan laporan, dan otomatisasi reporting untuk mendukung pengambilan keputusan. Saat ini aktif memimpin inisiatif <span className="text-green-300 font-semibold bg-green-500/10 px-1 rounded">People Analytics</span> di IEEE Student Branch untuk menganalisis data SDM dan meningkatkan efektivitas organisasi.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/5">
                  {[
                    { icon: <Database size={16} />, text: "Data Analysis", className: "bg-blue-500/5 text-blue-300 border-blue-500/10 hover:border-blue-500/30" },
                    { icon: <Code size={16} />, text: "Business Intelligence", className: "bg-purple-500/5 text-purple-300 border-purple-500/10 hover:border-purple-500/30" },
                    { icon: <Users size={16} />, text: "People Analytics", className: "bg-green-500/5 text-green-300 border-green-500/10 hover:border-green-500/30" }
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border flex items-center gap-2 transition-all hover:-translate-y-1 cursor-default ${tag.className}`}
                    >
                      {tag.icon} {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col gap-6 lg:h-full">
          
          <RevealOnScroll delay={400} className="flex-1">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-center h-full group hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold">Education</p>
                    <h4 className="text-white font-bold text-lg">Univ. Bakrie</h4>
                  </div>
                </div>
                <div className="text-sm text-slate-300 space-y-2 pl-1">
                  <p className="font-medium text-white border-l-2 border-purple-500 pl-3">
                    S1 - Sistem Informasi
                  </p>
                  <p className="text-slate-400 pl-3">
                    Focus: Data Analysis & Business Intelligence
                  </p>
                  <div className="pl-3 pt-1">
                    <span className="text-purple-300 font-semibold text-xs bg-purple-500/20 px-2.5 py-1 rounded-lg border border-purple-500/20">
                      High Distinction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={600} className="flex-1">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-center h-full group hover:shadow-xl hover:shadow-green-900/20 hover:-translate-y-1 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-all duration-300">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-950/50 rounded-full border border-green-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-green-400">
                      Available
                    </span>
                  </div>
                </div>
                <div className="pl-1">
                  <p className="text-slate-400 text-sm mb-1">Open for</p>
                  <h4 className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">
                    Data Analyst & Business Analyst Roles
                  </h4>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
