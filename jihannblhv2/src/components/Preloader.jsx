import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65, ease: 'easeInOut' } }}
    >
      <div className="relative w-full max-w-xl px-8 text-center">
        <motion.p
          className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-cyan-200"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Portfolio Loading
        </motion.p>
        <motion.h1
          className="font-display text-4xl font-bold text-white sm:text-6xl"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Jihan Nabilah Rahman
        </motion.h1>
        <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyanx to-violetx"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.35, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
