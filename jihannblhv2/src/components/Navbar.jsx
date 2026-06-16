import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cvContent = encodeURIComponent(
    `${profile.name}\n${profile.title}\n${profile.location}\n${profile.email}\n\nFocus Areas:\n${profile.focusAreas.map((area) => `- ${area}`).join('\n')}\n\nPortfolio: https://jihannabilah.vercel.app/\nGitHub: https://github.com/Jihanablh\nLinkedIn: https://www.linkedin.com/in/jihan-nabilah-057318357/`,
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = profile.navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)
        .findLast((section) => section.getBoundingClientRect().top <= 140);
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled ? 'border-white/12 bg-midnight/70 shadow-2xl shadow-black/25 backdrop-blur-2xl' : 'border-white/8 bg-white/[0.035] backdrop-blur-xl'
        }`}
      >
        <button onClick={() => jump('home')} className="flex items-center gap-3 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyanx to-violetx font-display text-sm font-black text-midnight shadow-glow">
            JN
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-bold text-white">Jihan Nabilah</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {profile.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => jump(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === item.id && <motion.span layoutId="activeNav" className="absolute inset-0 rounded-full bg-white/10" />}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`data:text/plain;charset=utf-8,${cvContent}`}
            download="Jihan-Nabilah-Rahman-CV.txt"
            className="hidden items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyanx hover:bg-cyanx hover:text-midnight md:inline-flex"
          >
            <Download size={16} />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/10 bg-midnight/90 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            {profile.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => jump(item.id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
