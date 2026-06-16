import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, DatabaseZap, Github, Globe2, Map } from 'lucide-react';
import MagneticButton from './MagneticButton';
import MiniLineChart from './MiniLineChart';

const insights = [
  {
    title: 'Data Visualization',
    label: 'INSIGHT LAYER',
    icon: BarChart3,
    description:
      'Menampilkan data kejadian bencana dalam bentuk visual yang mudah dipahami melalui peta, statistik, dan ringkasan wilayah.',
  },
  {
    title: 'Spatial Analysis',
    label: 'MAP INTELLIGENCE',
    icon: Map,
    description:
      'Menggunakan data spasial untuk membaca sebaran risiko dan kondisi kebencanaan di wilayah Daerah Istimewa Yogyakarta.',
  },
  {
    title: 'System / Business Value',
    label: 'DECISION SUPPORT',
    icon: DatabaseZap,
    description:
      'Menyajikan informasi kebencanaan secara lebih terstruktur, interaktif, dan berbasis data untuk mendukung pemahaman publik dan pengambilan keputusan.',
  },
];

export default function BestProjectShowcase({ project, onOpen }) {
  if (!project) return null;

  return (
    <div className="mb-14">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mono-label">[BEST PROJECT SHOWCASE]</p>
          <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Best project built around spatial data, analytics, and public information value.
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          A focused case study that connects disaster risk mapping, WebGIS interaction, and data-driven decision support.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <motion.article
          className="premium-border group relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel text-left shadow-2xl shadow-black/25"
          initial={{ opacity: 0, x: -32, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative h-72 overflow-hidden sm:h-80 lg:h-[22rem]">
            <img
              src={project.images[0]}
              alt={`${project.title} thumbnail`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            <div className="absolute right-5 top-5 hidden w-48 rounded-3xl border border-white/10 bg-black/35 p-3 backdrop-blur-xl sm:block">
              <p className="mono-label">Map Signal</p>
              <MiniLineChart compact className="mt-2 h-16" />
            </div>
          </div>

          <div className="relative p-5 sm:p-6">
            <span className="inline-flex rounded-full border border-cyanx/25 bg-cyanx/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100">
              BEST PROJECT / FEATURED CASE STUDY
            </span>
            <h4 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">{project.title}</h4>
            <p className="mt-3 text-sm font-bold text-cyan-100">{project.category}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p>

            {project.highlights?.length > 0 && (
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {project.highlights.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-cyanx/15 bg-cyanx/[0.06] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticButton onClick={() => onOpen(project)}>
                <ArrowUpRight size={18} />
                View Case Study
              </MagneticButton>
              {project.live && (
                <MagneticButton href={project.live} target="_blank" variant="secondary">
                  <Globe2 size={18} />
                  Live Demo
                </MagneticButton>
              )}
              {project.github && (
                <MagneticButton href={project.github} target="_blank" variant="secondary">
                  <Github size={18} />
                  GitHub
                </MagneticButton>
              )}
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {insights.map((card, index) => (
            <BestProjectInsightCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BestProjectInsightCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyanx/35 hover:bg-white/[0.065] hover:shadow-glow"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.58, delay: index * 0.1 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-cyanx/10 text-cyan-100 transition group-hover:scale-110">
          <Icon size={21} />
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="mono-label">[{card.label}]</p>
      <h4 className="mt-2 font-display text-xl font-bold text-white">{card.title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
    </motion.article>
  );
}
