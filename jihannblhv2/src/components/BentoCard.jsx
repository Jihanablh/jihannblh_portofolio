import { motion } from 'framer-motion';

export default function BentoCard({ children, className = '', delay = 0, as = 'div' }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`bento-card ${className}`}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
