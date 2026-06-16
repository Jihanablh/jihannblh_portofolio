import { motion } from 'framer-motion';
import { BarChart3, Boxes, ClipboardCheck, Database, GitBranch, LineChart, ScanSearch, Target } from 'lucide-react';
import { profile } from '../data/profile';
import BentoCard from './BentoCard';
import KpiCard from './KpiCard';
import MiniLineChart from './MiniLineChart';
import SectionHeader from './SectionHeader';

const highlightCards = [
  { title: 'Data to Insight', icon: Database, text: 'Mengolah data mentah menjadi insight yang ringkas, visual, dan mudah dipahami.' },
  { title: 'Business Understanding', icon: Target, text: 'Membaca kebutuhan bisnis, konteks stakeholder, dan tujuan pengambilan keputusan.' },
  { title: 'Decision Support', icon: BarChart3, text: 'Menyusun analisis, dashboard, dan rekomendasi untuk mendukung keputusan.' },
  { title: 'Process Analysis', icon: GitBranch, text: 'Memetakan alur bisnis, requirement, dan hubungan antar proses secara terstruktur.' },
  { title: 'Digital Solution', icon: Boxes, text: 'Menghubungkan analisis sistem dengan solusi digital yang efektif dan berbasis data.' },
];

const focusIcons = [Database, ClipboardCheck, LineChart, ScanSearch, GitBranch, BarChart3, Boxes];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="About"
        title="Turning data, requirements, and business process into clearer digital decisions."
        description="About section ini menegaskan arah Jihan sebagai calon Data Analyst dan Business Analyst yang memahami data, proses, sistem, dan nilai bisnis."
      />

      <div className="grid auto-rows-auto gap-5 lg:grid-cols-4">
        <BentoCard className="lg:col-span-2 lg:row-span-2 p-7 sm:p-9" delay={0}>
          <div className="absolute right-8 top-8 h-36 w-36 rounded-full bg-cyanx/10 blur-3xl" />
          <div className="relative z-10 mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-cyan-100">
            <LineChart size={16} />
            Data Analyst & Business Analyst Enthusiast
          </div>
          <p className="relative z-10 text-xl leading-10 text-slate-200">{profile.about}</p>
          <div className="relative z-10 mt-9 rounded-[1.5rem] border border-white/10 bg-midnight/45 p-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="mono-label">Analytics Signal</p>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">Data-driven</span>
            </div>
            <MiniLineChart className="h-36" />
          </div>
        </BentoCard>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <BentoCard
                key={card.title}
                className={index === 4 ? 'sm:col-span-2' : ''}
                delay={index * 0.05}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyanx/20 to-violetx/20 text-cyan-100 transition group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
              </BentoCard>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
        {profile.focusAreas.map((area, index) => {
          const Icon = focusIcons[index % focusIcons.length];
          return (
            <motion.div
              key={area}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition hover:-translate-y-1 hover:border-violetx/40 hover:bg-violetx/[0.06]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <Icon className="mx-auto mb-3 text-cyan-100" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">{area}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, index) => (
          <KpiCard key={stat.label} value={stat.value} label={stat.label} detail="portfolio signal" icon={focusIcons[index]} delay={index * 0.05} />
        ))}
      </div>
    </section>
  );
}
