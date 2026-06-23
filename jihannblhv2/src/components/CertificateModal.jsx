import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="absolute inset-0 bg-midnight/82 backdrop-blur-xl" onClick={onClose} aria-label="Close certificate modal" />
      <motion.div
        className="premium-border relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-2xl shadow-black/60"
        initial={{ scale: 0.92, y: 36, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 36, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-xl transition hover:border-red-300/60 hover:shadow-[0_0_24px_rgba(248,113,113,0.24)]"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.15fr_.85fr]">
          <div className="bg-midnight p-4 sm:p-6">
            <img src={certificate.image} alt={`${certificate.title} certificate`} className="max-h-[72vh] w-full rounded-[1.5rem] border border-white/10 object-contain" />
          </div>
          <div className="p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-cyanx/20 bg-cyanx/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100">
              {certificate.category}
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white">{certificate.title}</h3>
            <p className="mt-3 text-slate-400">
              {certificate.issuer} • {certificate.year}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">{certificate.description}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyanx/35 bg-cyanx px-5 py-3 text-sm font-bold text-midnight transition hover:-translate-y-0.5 hover:border-white/70 hover:shadow-[0_0_28px_rgba(32,231,255,0.3)]"
            >
              Open Certificate Link
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
