import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, BarChart3, Database, LineChart, Sparkles, TrendingUp } from 'lucide-react';
import { profile } from '../data/profile';
import AnimatedText from './AnimatedText';
import KpiCard from './KpiCard';
import MagneticButton from './MagneticButton';
import MiniLineChart from './MiniLineChart';

export default function Hero() {
  const [role, setRole] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 18 });
  const visualX = useTransform(springX, [-0.5, 0.5], [-26, 26]);
  const visualY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const timer = window.setInterval(() => setRole((value) => (value + 1) % profile.roles.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="home" onMouseMove={handleMove} className="section-shell flex min-h-screen items-center pt-32">
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyanx/10 blur-[120px]" />
      <div className="absolute right-10 top-40 hidden h-72 w-72 rounded-full bg-violetx/20 blur-[110px] lg:block" />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative z-10">
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Sparkles size={15} />
            [DATA ANALYST PORTFOLIO]
          </motion.div>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
            <AnimatedText text={profile.headline} />
          </h1>
          <motion.h2
            className="mt-5 font-display text-2xl font-bold text-cyan-100 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.65 }}
          >
            Data Analyst & Business Analyst Enthusiast
          </motion.h2>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="text-lg font-semibold text-slate-400">Positioning as</span>
            <motion.span
              key={profile.roles[role]}
              className="rounded-full border border-cyanx/25 bg-cyanx/10 px-4 py-2 font-display text-lg font-bold text-cyan-100 shadow-glow"
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
            >
              {profile.roles[role]}
            </motion.span>
          </div>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.75 }}
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#case-studies" variant="secondary">View Case Studies</MagneticButton>
            <MagneticButton href="#contact" variant="secondary">Contact Me</MagneticButton>
          </motion.div>
        </div>

        <motion.div style={{ x: visualX, y: visualY }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyanx/20 via-violetx/20 to-transparent blur-3xl" />
          <div className="dashboard-panel noise relative overflow-hidden p-5 sm:p-6">
            <div className="relative min-h-[34rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 p-5">
              <div className="absolute inset-0 dot-grid opacity-25" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-cyanx/15" />
              <div className="relative z-10 rounded-[1.5rem] border border-white/10 bg-midnight/60 p-5 backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="mono-label">Business Insight System</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-white">Business Pulse</h2>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanx text-midnight shadow-glow">
                    <BarChart3 size={22} />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Projects', value: '10+', detail: 'analysis portfolio', icon: Database },
                    { label: 'Dashboards', value: 'BI', detail: 'reporting layer', icon: TrendingUp },
                    { label: 'Process', value: 'BPMN', detail: 'flow analysis', icon: LineChart },
                    { label: 'Tools', value: '15+', detail: 'analyst stack', icon: BarChart3 },
                  ].map((card) => {
                    return (
                      <KpiCard key={card.label} {...card} />
                    );
                  })}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="mono-label">Insight Trend</p>
                    <span className="text-xs font-bold text-emerald-200">+24% clarity</span>
                  </div>
                  <MiniLineChart compact className="h-28" />
                </div>
              </div>
              {['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'].map((badge, index) => (
                <span
                  key={badge}
                  className={`absolute rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl animate-float ${
                    index === 0 ? 'left-4 top-6' : index === 1 ? 'right-5 top-24' : index === 2 ? 'bottom-20 left-7' : index === 3 ? 'bottom-7 right-8' : 'right-14 top-1/2'
                  }`}
                  style={{ animationDelay: `${index * 0.6}s` }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 backdrop-blur-xl transition hover:text-white md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        Scroll
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
