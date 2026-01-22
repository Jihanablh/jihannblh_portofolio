import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, ChevronRight, X, ChevronLeft, Github, ExternalLink, FileText, ChevronDown, ChevronUp, Layers } from 'lucide-react';

// --- KOMPONEN ANIMASI SCROLL ---
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ProjectsSection({ 
  projects, 
  openProjectDetail, 
  selectedProject, 
  closeProjectDetail, 
  currentImageIndex, 
  nextImage, 
  prevImage 
}) {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleViewMode = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(6);
      const section = document.getElementById('projects');
      if(section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto scroll-mt-28 px-4 sm:px-6 mt-20 mb-20">
      
      {/* --- HEADER --- */}
      <RevealOnScroll>
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-4 text-white">
            <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg shadow-blue-900/20">
                <Briefcase className="text-blue-400" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 ml-1 text-sm sm:text-base max-w-2xl leading-relaxed">
            Showcasing a collection of <span className="text-white font-medium">{Math.min(visibleCount, projects.length)}</span> selected projects focusing on Data Analytics, Engineering, and Business Intelligence.
          </p>
        </div>
      </RevealOnScroll>

      {/* --- GRID PROJECTS --- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project, idx) => (
          
          // Efek Staggered: Delay bertambah seiring index (idx * 100)
          <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
            <div 
              onClick={() => openProjectDetail(project)}
              className="group relative h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] cursor-pointer flex flex-col"
            >
              {/* Image Thumbnail with Zoom Effect */}
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Gradient Overlay di bawah gambar supaya teks kebaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
                
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-3 right-3 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md shadow-lg border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 relative z-20 bg-slate-900">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.shortDesc}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800/50 text-xs font-medium text-slate-300 border border-slate-700 rounded-md group-hover:border-slate-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-slate-800/50 text-xs text-slate-500 border border-slate-700 rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Link with Animated Arrow */}
                <div className="flex items-center text-blue-400 text-sm font-bold mt-auto group-hover:text-blue-300 transition-colors">
                  View Case Study 
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* --- TOMBOL SHOW MORE / LESS --- */}
      {projects.length > 6 && (
        <RevealOnScroll delay={300}>
            <div className="mt-16 flex justify-center">
            <button
                onClick={toggleViewMode}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all duration-300 border border-slate-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95"
            >
                {visibleCount < projects.length ? (
                <>
                    <Layers size={18} className="text-blue-400" />
                    Show More Projects 
                    <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform opacity-70" />
                </>
                ) : (
                <>
                    Show Less 
                    <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform opacity-70" />
                </>
                )}
            </button>
            </div>
        </RevealOnScroll>
      )}

      {/* --- MODAL DETAIL PROJECT (Enhanced Animation) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          
          {/* Background Gelap Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={closeProjectDetail}
          ></div>

          {/* Container Modal */}
          <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto scrollbar-hide animate-in zoom-in-95 slide-in-from-bottom-10 duration-300 ease-out">
            
            {/* Tombol Close Floating */}
            <button 
              onClick={closeProjectDetail}
              className="fixed top-6 right-6 sm:absolute sm:top-5 sm:right-5 z-50 p-2.5 bg-black/40 hover:bg-red-500/80 rounded-full text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col">
              
              {/* Carousel Gambar (Hero) */}
              <div className="relative w-full h-72 sm:h-[500px] bg-slate-950 group shrink-0 select-none">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                {/* Navigation Buttons (Hanya muncul saat hover) */}
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-blue-600/80 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:border-blue-400 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-blue-600/80 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:border-blue-400 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {selectedProject.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? 'bg-blue-500 w-8' : 'bg-white/30 w-2'}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Detail Konten */}
              <div className="p-8 sm:p-12 -mt-20 relative z-10">
                
                {/* Title Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 border-b border-slate-800 pb-8">
                  <div className="flex-1 space-y-4">
                    <span className="inline-flex px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 font-bold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        {selectedProject.category}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-xl">
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  <div className="flex gap-4 shrink-0">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 text-white transition-all border border-slate-700 hover:border-slate-500 font-bold group shadow-lg">
                      <Github size={20} className="group-hover:rotate-12 transition-transform"/> Code
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 text-white transition-all font-bold shadow-lg shadow-blue-900/30 hover:shadow-blue-500/40 group border border-transparent hover:border-blue-400">
                      <ExternalLink size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Demo
                    </a>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Kolom Kiri: Deskripsi Utama */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FileText className="text-blue-400" size={20} /> Project Overview
                            </h3>
                            <p className="text-slate-300 leading-8 text-lg text-justify">
                                {selectedProject.description}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                             {/* Challenge Card */}
                             <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
                                <h3 className="text-sm font-bold text-red-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    🔥 The Challenge
                                </h3>
                                <ul className="space-y-3">
                                {selectedProject.challenges && selectedProject.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                                    <span className="leading-relaxed">{challenge}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>

                            {/* Outcome Card */}
                            <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                                <h3 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    🚀 Key Outcomes
                                </h3>
                                <ul className="space-y-3">
                                {selectedProject.outcomes && selectedProject.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                                    <span className="leading-relaxed">{outcome}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Tech Stack & Info */}
                    <div className="space-y-8">
                        <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm sticky top-6">
                             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                                <Layers size={16} /> Technologies Used
                             </h3>
                             <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 hover:bg-slate-800 rounded-lg text-sm text-slate-300 transition-all cursor-default shadow-sm">
                                    {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}