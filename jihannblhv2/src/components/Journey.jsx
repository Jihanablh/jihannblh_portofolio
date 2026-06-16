import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Sparkle } from 'lucide-react';
import { journey } from '../data/journey';
import SectionHeader from './SectionHeader';

export default function Journey() {
  return (
    <section id="journey" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="Journey"
        title="A timeline of learning, building, organizing, and preparing for impact."
        description="Experience ditata sebagai perjalanan yang menghubungkan akademik, organisasi, komunitas, dan kesiapan profesional."
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyanx via-violetx to-transparent md:left-1/2" />
        {journey.map((item, index) => {
          const Icon = item.type === 'Education' ? GraduationCap : item.type === 'Professional' ? BriefcaseBusiness : Sparkle;
          return (
            <motion.article
              key={`${item.title}-${item.period}`}
              className={`relative mb-8 grid gap-5 md:grid-cols-2 ${index % 2 ? 'md:text-left' : 'md:text-right'}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.58, delay: index * 0.05 }}
            >
              <div className={`${index % 2 ? 'md:col-start-2' : ''} ml-14 md:ml-0`}>
                <div className="glass-card premium-border rounded-[1.5rem] p-6">
                  <div className={`mb-4 flex items-center gap-3 ${index % 2 ? '' : 'md:justify-end'}`}>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyanx/10 text-cyan-100">
                      <Icon size={18} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 font-semibold text-cyan-100">{item.place}</p>
                  <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>
                  <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 ? '' : 'md:justify-end'}`}>
                    {item.points.map((point) => (
                      <span key={point} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="absolute left-5 top-6 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-cyanx/35 bg-midnight text-cyanx shadow-glow md:left-1/2">
                {index + 1}
              </span>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
