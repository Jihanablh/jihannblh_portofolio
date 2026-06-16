import { motion } from 'framer-motion';
import { ArrowUpRight, Lightbulb, ListChecks, Target, Wrench } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import SectionHeader from './SectionHeader';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="Case Studies"
        title="Analytical stories framed like professional business and data case studies."
        description="Setiap case study menjelaskan problem, objective, data atau requirement, process, insight, recommendation, dan result."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.title}
            className="glass-card premium-border overflow-hidden rounded-[2rem]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.62, delay: index * 0.06 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={study.image} alt={`${study.title} visual`} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/25 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-cyanx/20 bg-cyanx/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
                {study.category}
              </span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="font-display text-3xl font-bold text-white">{study.title}</h3>
              <div className="mt-6 grid gap-4">
                <InfoBlock icon={Target} label="Problem" text={study.problem} />
                <InfoBlock icon={ArrowUpRight} label="Objective" text={study.objective} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <ListBlock icon={ListChecks} label="Data / Requirement" items={study.data} />
                  <ListBlock icon={Wrench} label="Process & Tools" items={[...study.process.slice(0, 2), ...study.tools.slice(0, 2)]} />
                </div>
                <InfoBlock icon={Lightbulb} label="Insight" text={study.insight} highlight />
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoBlock label="Recommendation" text={study.recommendation} />
                  <InfoBlock label="Result" text={study.result} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function InfoBlock({ icon: Icon, label, text, highlight = false }) {
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? 'border-cyanx/25 bg-cyanx/[0.07]' : 'border-white/10 bg-white/[0.035]'}`}>
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
        {Icon && <Icon size={15} />}
        {label}
      </div>
      <p className="text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function ListBlock({ icon: Icon, label, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
        <Icon size={15} />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
