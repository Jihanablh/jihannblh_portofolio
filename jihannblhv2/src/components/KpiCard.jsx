import { motion } from 'framer-motion';

export default function KpiCard({ label, value, detail, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyanx/40 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-5 flex items-center justify-between">
        {Icon && (
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-midnight/45 text-cyan-100 transition group-hover:scale-110">
            <Icon size={19} />
          </span>
        )}
        <span className="h-2 w-2 rounded-full bg-cyanx shadow-[0_0_18px_rgba(32,231,255,.9)]" />
      </div>
      <motion.p
        className="font-display text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.12 }}
      >
        {value}
      </motion.p>
      <p className="mt-1 text-sm font-bold text-slate-300">{label}</p>
      {detail && <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>}
    </motion.div>
  );
}
