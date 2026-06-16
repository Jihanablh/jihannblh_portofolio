import React, { useEffect, useState } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Project' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setIsScrolled(scrollTop > 20);
      setScrollProgress(progress);

      if (scrollTop < 80) {
        setActiveSection('home');
        return;
      }

      const viewportAnchor = 150;
      const currentItem =
        navItems
          .map((item) => ({ ...item, element: document.getElementById(item.id) }))
          .filter((item) => item.element)
          .reverse()
          .find((item) => item.element.getBoundingClientRect().top <= viewportAnchor) || navItems[0];

      setActiveSection(currentItem.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    setIsMobileOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    scrollToSection?.(id);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[70] h-1 bg-slate-950/40">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed right-4 top-1/2 z-[50] hidden h-44 w-1 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 bg-slate-950/50 shadow-2xl shadow-blue-900/20 backdrop-blur-xl md:block">
        <div
          className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 transition-[height] duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className={`flex h-12 items-center justify-between transition-all duration-300 ${
              isScrolled
                ? 'rounded-full border border-white/10 bg-slate-950/75 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-5'
                : 'rounded-none border border-transparent bg-transparent px-0'
            }`}
          >
            <button
              type="button"
              onClick={() => goToSection('home')}
              className="group select-none text-left font-display text-xl font-bold tracking-tight text-slate-100 sm:text-2xl"
            >
              <span className="transition-colors group-hover:text-blue-300">Jihannblh</span>
              <span className="ml-1 font-normal text-blue-400">Porto</span>
              <span className="text-purple-400">.</span>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-500/15 text-white shadow-[0_0_24px_rgba(59,130,246,0.18)] ring-1 ring-blue-300/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-cyanx transition-all duration-300 ${
                        isActive ? 'w-5 opacity-100 shadow-[0_0_14px_rgba(32,231,255,0.8)]' : 'w-0 opacity-0'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:border-blue-400/50 md:hidden"
            >
              {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {isMobileOpen && (
            <nav className="mt-4 grid gap-2 rounded-3xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                    activeSection === item.id ? 'bg-blue-500/15 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => goToSection('home')}
        className={`fixed bottom-6 right-6 z-[55] grid h-12 w-12 place-items-center rounded-full border border-blue-300/20 bg-blue-500 text-white shadow-2xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] ${
          isScrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
