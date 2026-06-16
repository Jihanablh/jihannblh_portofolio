import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  ariaLabel,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const leave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx';
  const styles =
    variant === 'primary'
      ? 'bg-cyanx text-midnight shadow-glow hover:bg-white'
      : 'border border-white/15 bg-white/[0.04] text-white hover:border-cyanx/60 hover:bg-white/[0.08]';
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${styles} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={leave}
      whileTap={{ scale: 0.96 }}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Component>
  );
}
