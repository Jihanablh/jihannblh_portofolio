import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Award, X, ChevronDown, ChevronUp, ExternalLink, Calendar, ShieldCheck, Code, Database, BarChart3, TrendingUp } from 'lucide-react';

// --- ANIMATION HELPER ---
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

export default function CertificationsSection({ allAchievements }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCert, setSelectedCert] = useState(null);

  // --- FUNGSI AJAIB: Mengubah Link Drive jadi Embed Preview ---
  const getEmbedUrl = (url) => {
    if (!url) return "";
    // Mengambil ID dari URL Google Drive
    const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    }
    return url;
  };

  const toggleViewMode = () => {
    if (visibleCount < allAchievements.length) {
      setVisibleCount(allAchievements.length);
    } else {
      setVisibleCount(6);
      const section = document.getElementById('certifications');
      if(section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="max-w-6xl mx-auto scroll-mt-28 px-4 sm:px-6 mt-20 mb-20">
      
      {/* --- HEADER --- */}
      <RevealOnScroll>
        <div className="flex flex-col mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-4 text-white">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg shadow-purple-900/20">
                    <Trophy className="text-purple-400" />
                </div>
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                    Achievements
                </span>
            </h2>
            <p className="text-slate-400 mt-4 ml-1 text-sm sm:text-base max-w-2xl leading-relaxed">
                Professional certifications, hackathon wins, and technical awards that demonstrate my commitment to continuous learning.
            </p>
        </div>
      </RevealOnScroll>
      
      {/* --- GRID CARD --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allAchievements.slice(0, visibleCount).map((item, idx) => (
          
          <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
            <div 
              onClick={() => setSelectedCert(item)}
              className="cursor-pointer group relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-2"
            >
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/5 blur-[60px] rounded-full group-hover:bg-purple-600/10 transition-all z-0"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {item.icon && React.cloneElement(item.icon, { className: "text-slate-400 group-hover:text-purple-400 transition-colors" })}
                  </div>
                  
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all shadow-sm">
                    {item.type}
                  </span>
                </div>

                {/* Title & Info */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-4 font-bold font-mono uppercase">
                  <span>{item.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span>{item.date}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 border-l-2 border-slate-800 pl-3 group-hover:border-purple-500/30 transition-colors">
                  {item.desc}
                </p>
                
                {/* Footer / CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300">Verified</span>
                   </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-purple-400/80 group-hover:text-purple-400 transition-colors">
                    View Cert <ExternalLink size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* --- SHOW MORE BUTTON --- */}
      {allAchievements.length > 6 && (
        <RevealOnScroll delay={200}>
            <div className="mt-14 flex justify-center">
            <button 
                onClick={toggleViewMode}
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all duration-300 border border-slate-700 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
                {visibleCount < allAchievements.length ? (
                    <>Show More <ChevronDown size={18} /></>
                ) : (
                    <>Show Less <ChevronUp size={18} /></>
                )}
            </button>
            </div>
        </RevealOnScroll>
      )}

      {/* --- MODAL DETAIL (POPUP DENGAN GOOGLE DRIVE EMBED) --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setSelectedCert(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 h-[85vh]">
            
            {/* Header Modal */}
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900 z-10">
              <div className="flex items-center gap-3">
                 <h3 className="text-lg sm:text-xl font-bold text-white truncate max-w-[200px] sm:max-w-md">
                    {selectedCert.title}
                 </h3>
                 <a href={selectedCert.link} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Open in New Tab">
                    <ExternalLink size={16} />
                 </a>
              </div>
              <button onClick={() => setSelectedCert(null)} className="p-2 bg-slate-800 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* AREA UTAMA: GOOGLE DRIVE EMBED */}
            {/* Ini bagian ajaibnya: iframe menampilkan preview dari link Drive */}
            <div className="flex-1 bg-slate-950 relative w-full h-full">
                {selectedCert.link ? (
                    <iframe 
                        src={getEmbedUrl(selectedCert.link)}
                        className="w-full h-full border-0"
                        allow="autoplay"
                        title={selectedCert.title}
                    ></iframe>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">
                        No Document Link Available
                    </div>
                )}
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
                <div className="text-xs text-slate-500 hidden sm:block">
                    Powered by Google Drive Preview
                </div>
                <button 
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium text-sm transition-colors shadow-lg shadow-purple-900/20"
                >
                    Close Preview
                </button>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}