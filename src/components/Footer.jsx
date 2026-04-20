import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="font-display font-bold text-lg"
        >
          <span className="text-white">Enait</span>
          <span className="text-gold">.</span>
        </motion.a>

        <p className="font-body text-white/30 text-sm text-center">
          © {year} Md Enaitul Hoque. All rights reserved.
        </p>

        <a
          href="#home"
          className="font-mono text-xs text-white/30 hover:text-gold transition-colors duration-300 tracking-widest uppercase"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
