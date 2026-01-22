import React from 'react';
import { 
  Code, Users, FileText, Linkedin, Github, Mail, 
  Briefcase, Award, GraduationCap 
} from 'lucide-react';

// Pastikan menerima props: contactInfo & scrollToSection
export default function HeroSection({ contactInfo, scrollToSection }) {
  
  // --- 🛡️ BAGIAN PENGAMAN (SAFETY CHECK) ---
  // Jika data contactInfo belum diterima, jangan render apa-apa (atau loading)
  // Ini mencegah layar putih "Cannot read properties of undefined"
  if (!contactInfo) {
    console.log("Menunggu data contactInfo..."); // Cek di Console browser
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col h-full justify-between">
        
        {/* BIO & TEXT */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-lg cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Data Science Student & Junior Data Scientist
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-tight whitespace-nowrap">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Jihan</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">Nabilah</span>{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Rahman</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Mahasiswa Sistem Informasi yang berfokus mengubah data kompleks menjadi solusi bisnis cerdas. Berpengalaman dalam <span className="text-blue-400 font-semibold">Machine Learning</span>, <span className="text-purple-400 font-semibold">Predictive Modeling</span>, dan <span className="text-green-400 font-semibold">Data Visualization</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => scrollToSection && scrollToSection('projects')} 
              className="group relative px-6 py-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="flex items-center gap-2"><Code size={18} /> View Projects</div>
            </button>
            
            <button 
              onClick={() => scrollToSection && scrollToSection('about')} 
              className="px-6 py-3 bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Users size={18} /> About Me
            </button>
            
            <a href="#" className="px-6 py-3 bg-slate-900/50 border border-slate-700 hover:border-pink-500/50 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-all hover:-translate-y-1 flex items-center gap-2">
              <FileText size={18} /> CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700"></div>
            <div className="flex gap-6">
              {/* Pastikan menggunakan optional chaining (?.) biar aman */}
              <a href={contactInfo?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-110"><Linkedin size={24} /></a>
              <a href={contactInfo?.github || '#'} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-all transform hover:scale-110"><Github size={24} /></a>
              <a href={`mailto:${contactInfo?.email}`} className="text-slate-400 hover:text-pink-400 transition-all transform hover:scale-110"><Mail size={24} /></a>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>
        </div>

        {/* STATS */}
        <div className="w-full max-w-6xl mx-auto mt-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 text-left">
              <div className="absolute -right-4 -top-4 text-blue-900/20 group-hover:text-blue-900/40 transition-colors duration-300"><Briefcase size={80} /></div>
              <div className="relative z-10"><h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-1">15+</h3><p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Projects Completed</p></div>
            </div>
            <div className="relative group bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20 text-left">
              <div className="absolute -right-4 -top-4 text-purple-900/20 group-hover:text-purple-900/40 transition-colors duration-300"><Award size={80} /></div>
              <div className="relative z-10"><h3 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-1">6+</h3><p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Certifications</p></div>
            </div>
            <div className="relative group bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-900/20 text-left">
              <div className="absolute -right-4 -top-4 text-pink-900/20 group-hover:text-pink-900/40 transition-colors duration-300"><GraduationCap size={80} /></div>
              <div className="relative z-10"><h3 className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-1">3.8</h3><p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">GPA / IPK</p></div>
            </div>
            <div className="relative group bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-900/20 text-left">
              <div className="absolute -right-4 -top-4 text-green-900/20 group-hover:text-green-900/40 transition-colors duration-300"><Users size={80} /></div>
              <div className="relative z-10"><h3 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-1">4+</h3><p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Organizations</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}