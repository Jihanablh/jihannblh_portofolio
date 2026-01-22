import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Award, X, ChevronDown, ChevronUp, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

// --- REUSABLE ANIMATION COMPONENT ---
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
              {/* Background Glow (Purple Neon) */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/5 blur-[60px] rounded-full group-hover:bg-purple-600/10 transition-all z-0"></div>
              
              {/* Decorative Tech Corners (Bingkai Sudut) */}
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 border-t-2 border-r-2 border-purple-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 border-b-2 border-l-2 border-purple-500"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {/* Icon Clone dengan warna baru */}
                    {React.cloneElement(item.icon, { className: "text-slate-400 group-hover:text-purple-400 transition-colors" })}
                  </div>
                  
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all shadow-sm">
                    {item.type}
                  </span>
                </div>

                {/* Content */}
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
                    View Detail <ExternalLink size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* --- TOMBOL SHOW MORE / LESS --- */}
      {allAchievements.length > 6 && (
        <RevealOnScroll delay={200}>
            <div className="mt-14 flex justify-center">
            <button 
                onClick={toggleViewMode}
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all duration-300 border border-slate-700 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
                {visibleCount < allAchievements.length ? (
                    <>
                    Show More <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </>
                ) : (
                    <>
                    Show Less <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
            </button>
            </div>
        </RevealOnScroll>
      )}

      {/* --- MODAL DETAIL (POPUP) --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setSelectedCert(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 max-h-[90vh]">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900 z-10 shrink-0 relative">
              {/* Garis Gradasi Atas */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600"></div>
              
              <div className="flex items-center gap-5 mt-2">
                 <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20 hidden sm:block">
                    {React.cloneElement(selectedCert.icon, { size: 24 })}
                 </div>
                 <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{selectedCert.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm">
                         <span className="text-purple-300 font-bold flex items-center gap-1">
                            <ShieldCheck size={14} /> {selectedCert.issuer}
                         </span>
                        <span className="text-slate-600 hidden sm:inline">•</span> 
                        <span className="text-slate-400 flex items-center gap-1 font-mono text-xs">
                             <Calendar size={12} /> {selectedCert.date}
                        </span>
                    </div>
                 </div>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-red-500/80 transition-colors ml-4"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                <div className="flex flex-col gap-8">
                    
                    {/* Gambar Sertifikat dengan Frame */}
                    {selectedCert.image && (
                        <div className="relative group perspective-1000">
                             <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                             <div className="relative w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                                <img 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title} 
                                    className="w-full h-auto object-contain max-h-[450px]" 
                                />
                            </div>
                        </div>
                    )}

                    {/* Deskripsi */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                                Credential Details
                            </h4>
                            <p className="text-slate-300 leading-7 text-justify">
                                {selectedCert.desc}
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                             <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Meta Information</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Type</span>
                                        <span className="text-white font-medium bg-slate-700/50 px-2 py-0.5 rounded text-xs">{selectedCert.type}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Status</span>
                                        <span className="text-green-400 font-medium flex items-center gap-1 text-xs"><ShieldCheck size={12}/> Valid</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0 flex justify-end gap-3">
                <button 
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2.5 text-slate-400 hover:text-white font-medium text-sm transition-colors"
                >
                    Close
                </button>
                <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-bold text-sm shadow-lg shadow-purple-900/20 flex items-center gap-2">
                    Verify Credential <ExternalLink size={16} />
                </button>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}