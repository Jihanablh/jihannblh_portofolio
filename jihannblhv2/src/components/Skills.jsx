import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ChartNoAxesCombined, ClipboardList, Presentation, SearchCheck } from 'lucide-react';
import { skills } from '../data/skills';
import SectionHeader from './SectionHeader';

const categoryIcons = {
  'Data Analysis': ChartNoAxesCombined,
  'Data Visualization': BarChart3,
  'Business Analysis': ClipboardList,
  'System & Digital Product Analysis': SearchCheck,
  'Professional Skills': Presentation,
};

export default function Skills() {
  const [active, setActive] = useState(skills[0].category);

  return (
    <section id="skills" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="Skills"
        title="A command center of analytical, business, and digital tools."
        description="A curated stack of analytical, business, and digital tools I use to transform data into meaningful insights and support better business decisions."
      />

      <div className="glass-card noise relative overflow-hidden rounded-[2.25rem] p-4 sm:p-6">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyanx/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violetx/10 blur-[100px]" />

        <div className="relative z-10 mb-6 grid gap-4 md:grid-cols-3">
          {[
            ['Analyst Mode', 'Data to decision'],
            ['Reporting Layer', 'Dashboard ready'],
            ['Business Lens', 'Process aware'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">{label}</p>
              <p className="mt-2 font-display text-2xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 grid gap-5 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillArsenalCard
              key={skill.category}
              skill={skill}
              index={index}
              active={active === skill.category}
              onActivate={() => setActive(skill.category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillArsenalCard({ skill, index, active, onActivate }) {
  const Icon = categoryIcons[skill.category] || ChartNoAxesCombined;

  return (
    <motion.button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`premium-border group relative overflow-hidden rounded-[1.7rem] border p-6 text-left transition duration-300 ${
        active
          ? 'border-cyanx/35 bg-white/[0.065] shadow-glow'
          : 'border-white/10 bg-midnight/35 hover:-translate-y-1 hover:border-cyanx/30 hover:bg-white/[0.055]'
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyanx via-blue-400 to-violetx opacity-80" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyanx/20 to-violetx/20 text-cyan-100 transition group-hover:scale-110">
          <Icon size={25} />
        </div>
        <div className="min-w-28 rounded-full border border-white/10 bg-white/[0.04] p-1">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyanx to-violetx"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.05 }}
            />
          </div>
        </div>
      </div>
      <h3 className="font-display text-2xl font-bold text-white">{skill.category}</h3>
      <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">{skill.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skill.items.map((item, badgeIndex) => (
          <motion.span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:scale-105 hover:border-cyanx/45 hover:bg-cyanx/10 hover:text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 + badgeIndex * 0.025 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.button>
  );
}
