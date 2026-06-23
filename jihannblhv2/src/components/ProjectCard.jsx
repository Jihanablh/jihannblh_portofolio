import { ArrowUpRight, BriefcaseBusiness, Lightbulb, ListChecks, Target } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProjectCard({ project, onOpen, featured = false, index = 0 }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      className={`premium-border group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/80 text-left shadow-2xl shadow-black/25 outline-none transition duration-500 hover:-translate-y-1 hover:border-cyanx/35 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-cyanx ${
        featured ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 42, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.62, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-[1.75rem] border border-white/10" />
      <div className="relative overflow-hidden rounded-t-[1.75rem]">
        <img
          src={project.images[0]}
          alt={`${project.title} thumbnail`}
          loading="lazy"
          className={`w-full object-cover transition duration-700 group-hover:scale-110 ${featured ? 'h-80' : 'h-56'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/15 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-xl">
          {project.label}
        </div>
      </div>

      <div className="relative p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
            <BriefcaseBusiness size={14} />
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition group-hover:border-cyanx/50 group-hover:text-cyanx">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold text-white transition group-hover:text-cyan-100">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
        <div className="mt-5 grid gap-2">
          <MiniInfo icon={Target} label="Objective" text={project.objective} />
          <MiniInfo icon={ListChecks} label="Approach" text={project.process} />
          <MiniInfo icon={Lightbulb} label="Value" text={project.businessValue} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
              {item}
            </span>
          ))}
        </div>
        {project.highlights?.length > 0 && (
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.highlights.slice(0, 4).map((item) => (
            <span key={item} className="rounded-2xl border border-cyanx/10 bg-cyanx/[0.06] px-3 py-2 text-xs font-semibold leading-5 text-cyan-100">
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition group-hover:text-white">
          View Case Study
          <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.button>
  );
}

function MiniInfo({ icon: Icon, label, text }) {
  if (!text) return null;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
      <div className="mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-100">
        <Icon size={12} />
        {label}
      </div>
      <p className="text-xs leading-5 text-slate-400">{text}</p>
    </div>
  );
}
