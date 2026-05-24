import { motion } from 'framer-motion'

export default function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-16">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-gold/60 text-sm tracking-[0.3em] uppercase block mb-3"
      >
        {number} — {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
      >
        {title}
        <span className="text-gold">.</span>
      </motion.h2>
    </div>
  )
}
