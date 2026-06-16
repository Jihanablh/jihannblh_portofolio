import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, DatabaseZap, Github, Globe2, Map, ShieldAlert } from 'lucide-react';
import MagneticButton from './MagneticButton';
import MiniLineChart from './MiniLineChart';

const detailCards = [
  {
    title: 'Data Visualization',
    label: 'INSIGHT LAYER',
    metric: '1,374',
    metricLabel: 'Total Events',
    icon: BarChart3,
    description:
      'Menampilkan data kejadian bencana dalam bentuk visual yang lebih mudah dipahami melalui peta, statistik, dan ringkasan wilayah.',
    points: ['Disaster data', 'Regional statistics', 'Visual insight'],
  },
  {
    title: 'Spatial Analysis',
    label: 'MAP INTELLIGENCE',
    metric: '5',
    metricLabel: 'Regions',
    icon: Map,
    description:
      'Menggunakan data spasial untuk membantu membaca sebaran risiko dan kondisi kebencanaan di wilayah Daerah Istimewa Yogyakarta.',
    points: ['GeoJSON', 'QGIS', 'Map-based insight'],
  },
  {
    title: 'Business / System Value',
    label: 'DECISION SUPPORT',
    metric: '6',
    metricLabel: 'Disaster Categories',
    icon: DatabaseZap,
    description:
      'Membantu menyajikan informasi kebencanaan secara lebih terstruktur, interaktif, dan berbasis data untuk mendukung pemahaman publik dan pengambilan keputusan.',
    points: ['Information system', 'Decision support', 'Public dashboard'],
  },
];

export default function BestProjectShowcase({ project, onOpen }) {
  if (!project) return null;

  return (
    <div className="mb-12">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="mono-label">[BEST PROJECT SHOWCASE]</p>
          <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Jogja Siaga as featured analytical case study.</h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          A WebGIS project that combines disaster data, spatial visualization, dashboard thinking, and public information system value.
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
            <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
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

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <span key={item} className="rounded-2xl border border-cyanx/15 bg-cyanx/[0.06] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-100">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-slate-300">
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
          {detailCards.map((card, index) => (
            <BestProjectDetailCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BestProjectDetailCard({ card, index }) {
  const Icon = card.icon || ShieldAlert;

  return (
    <motion.article
      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/10 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyanx/35 hover:bg-white/[0.065] hover:shadow-glow"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.58, delay: index * 0.1 }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-cyanx/10 text-cyan-100 transition group-hover:scale-110">
          <Icon size={20} />
        </span>
        <div className="text-right">
          <p className="font-display text-2xl font-bold text-white">{card.metric}</p>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{card.metricLabel}</p>
        </div>
      </div>
      <p className="mono-label">[{card.label}]</p>
      <h4 className="mt-2 font-display text-xl font-bold text-white">{card.title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {card.points.map((point) => (
          <span key={point} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
            {point}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
