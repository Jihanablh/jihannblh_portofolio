import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/certificates';
import CertificateModal from './CertificateModal';
import SectionHeader from './SectionHeader';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="certificates" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="Certificates"
        title="Verified learning records for data, analytics, Python, AI, and business skills."
        description="Setiap certificate card bisa dibuka sebagai modal preview agar sertifikat lebih jelas, responsif, dan tetap terasa premium."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.button
            type="button"
            key={cert.title}
            onClick={() => setSelected(cert)}
            className="group glass-card premium-border overflow-hidden rounded-[1.5rem] text-left transition hover:-translate-y-1 hover:border-cyanx/35 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.045 }}
          >
            <div className="relative h-44 overflow-hidden">
              <img src={cert.image} alt={`${cert.title} certificate preview`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-cyanx/20 bg-cyanx/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-xl">
                {cert.category}
              </span>
            </div>
            <div className="p-6">
              <div className="mb-5 flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violetx/15 text-violet-100 transition group-hover:rotate-6 group-hover:scale-110">
                  <Award size={22} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
                  {cert.year}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-400">{cert.issuer}</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">{cert.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-100">
                Preview certificate
                <ExternalLink size={15} />
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
