import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { gallery } from '../data/gallery';
import SectionHeader from './SectionHeader';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="section-shell">
      <SectionHeader
        eyebrow="Gallery"
        title="Visual highlights from projects, dashboards, diagrams, and product concepts."
        description="A bento-style glance at project visuals that gives the portfolio more texture and context."
      />

      <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
        {gallery.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => setSelected(item)}
            className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-left ${
              index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.045 }}
          >
            <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">{item.category}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.title}</h3>
            </div>
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
              <Maximize2 size={18} />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[90] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-midnight/80 backdrop-blur-xl" onClick={() => setSelected(null)} aria-label="Close gallery modal" />
            <motion.div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-panel" initial={{ scale: 0.96, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 24 }}>
              <button className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur-xl" onClick={() => setSelected(null)} aria-label="Close">
                <X size={18} />
              </button>
              <img src={selected.image} alt={selected.title} className="max-h-[76vh] w-full object-contain bg-midnight" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
