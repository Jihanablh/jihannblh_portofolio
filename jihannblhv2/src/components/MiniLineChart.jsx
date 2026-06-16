import { motion } from 'framer-motion';

export default function MiniLineChart({ className = '', compact = false }) {
  const height = compact ? 120 : 170;
  const width = 520;
  const line = 'M4 128 C52 74 86 100 130 76 C190 44 210 138 270 92 C330 46 370 82 422 40 C454 15 485 36 516 22';
  const dots = [
    [130, 76],
    [270, 92],
    [422, 40],
    [516, 22],
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={`w-full overflow-visible ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="miniLineGradient" x1="0" x2="1">
          <stop stopColor="#20E7FF" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {[40, 80, 120].map((lineY) => (
        <path key={lineY} d={`M0 ${lineY}H520`} stroke="rgba(255,255,255,.08)" />
      ))}
      <motion.path
        d={line}
        fill="none"
        stroke="rgba(139,92,246,.18)"
        strokeWidth="20"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.15, ease: 'easeInOut' }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="url(#miniLineGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.15, ease: 'easeInOut' }}
      />
      {dots.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="7"
          fill="#20E7FF"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.42 + index * 0.1 }}
        />
      ))}
    </svg>
  );
}
