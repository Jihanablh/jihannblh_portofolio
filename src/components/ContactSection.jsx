import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ChevronRight, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ contactInfo, scrollToSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  // State untuk status pengiriman
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- INTEGRASI PENGIRIMAN EMAIL ---
    // Cara paling mudah untuk React tanpa backend adalah pakai Formspree.
    // 1. Daftar di https://formspree.io/ (Gratis)
    // 2. Buat Form baru, lalu copy "Endpoint URL" nya.
    // 3. Tempel URL tersebut di bawah ini menggantikan "https://formspree.io/f/YOUR_FORM_ID"
    
    try {
      // GANTI URL DI BAWAH INI DENGAN URL DARI FORMSPREE KAMU
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // KODE DI BAWAH INI AKAN JALAN KALAU SUKSES (ATAU UNTUK SIMULASI)
      // Jika belum punya URL Formspree, blok 'if' ini akan error, 
      // tapi saya buat simulasi setTimeout agar kamu bisa lihat efek UI-nya sekarang.
      
      if (response.ok) {
        handleSuccess();
      } else {
        // Hapus bagian 'else' ini nanti jika sudah punya ID Formspree asli
        // Ini hanya simulasi agar UI terlihat jalan saat testing tanpa ID
        setTimeout(() => {
           handleSuccess();
        }, 1500); 
      }
    } catch (error) {
      // Fallback simulasi jika fetch error (karena URL palsu)
      setTimeout(() => {
        handleSuccess();
      }, 1500);
    }
  };

  // Fungsi helper saat sukses
  const handleSuccess = () => {
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset Form
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });

    // Hilangkan pesan sukses setelah 5 detik
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* KOLOM KIRI: INFO */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Get in Touch
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let’s Build Something <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Tertarik berkolaborasi dalam proyek Data Science, AI, atau sekadar ingin berdiskusi tentang teknologi? Saya selalu terbuka untuk peluang baru.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${contactInfo.email}`} className="group flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 group-hover:text-blue-300 transition-colors">Email Me</h4>
                  <p className="text-slate-400 text-sm break-all">{contactInfo.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-slate-400 text-sm">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="pt-4">
                 <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Follow Me</h4>
                 <div className="flex gap-4">
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-600 transition-all duration-300">
                      <Github size={20} />
                    </a>
                 </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-2">Send me a message 🚀</h3>
            <p className="text-slate-400 text-sm mb-8">I'll get back to you within 24 hours.</p>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              
              {/* Pesan Sukses Alert */}
              {isSuccess && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400 animate-in fade-in slide-in-from-top-2 mb-4">
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-semibold">Message sent successfully! I'll reply soon.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Hiring / Recruitment">Hiring / Recruitment</option>
                  <option value="Just saying hi!">Just saying hi!</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message 
                        <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Jihan Nabilah Rahman</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href="#about" onClick={() => scrollToSection('about')} className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer">About</a>
             <a href="#projects" onClick={() => scrollToSection('projects')} className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer">Projects</a>
             <a href="#contact" className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer">Contact</a>
          </div>
        </div>

      </div>
    </section>
  );
}