import { motion } from 'framer-motion'

export default function SectionHeading({ number, title, subtitle, intro }) {
  return (
    <div className="group mb-12">
      {intro && (
        <p className="mb-0 max-h-0 overflow-hidden font-body text-sm text-white/65 opacity-0 transition-[max-height,opacity,margin] duration-300 group-hover:mb-2 group-hover:max-h-12 group-hover:opacity-100 max-md:max-h-12 max-md:opacity-65">
          {intro}
        </p>
      )}
      {number && subtitle && <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-gold/60 text-sm tracking-[0.3em] uppercase block mb-3"
      >
        {number} — {subtitle}
      </motion.span>}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group relative w-fit font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
      >
        {title}
        <span className="text-gold">.</span>
      </motion.h2>
    </div>
  )
}
