import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-200">
        <span className="h-1.5 w-1.5 rounded-full bg-cyanx shadow-[0_0_18px_rgba(32,231,255,.9)]" />
        [{eyebrow}]
      </p>
      <h2 className="font-display text-4xl font-bold leading-[1.02] text-white sm:text-6xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
