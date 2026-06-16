import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = '' }) {
  const words = text.split(' ');

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.22em] inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.72, delay: index * 0.065, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
