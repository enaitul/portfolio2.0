import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import heroBg from '../assets/images/background-ai.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat" />


      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,204,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-padding w-full pt-20 md:pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
            <span className="font-mono text-gold text-xs sm:text-sm tracking-widest uppercase">
              CSE Undergraduate
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-body text-white/50 text-lg md:text-2xl mb-2 tracking-wide"
            >
              Hi, I'm
            </motion.p>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              <span className="text-white">Md Enaitul</span>
              <br />
              <span className="text-gold relative">
                Hoque
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body text-white/50 text-sm md:text-lg max-w-lg leading-relaxed mb-8 md:mb-10"
          >
            Turning ideas into real-world applications. Passionate about web
            development, problem-solving, and building impactful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04, backgroundColor: '#e6b800' }}
              whileTap={{ scale: 0.97 }}
              className="text-center bg-gold text-dark font-display font-bold text-sm px-7 py-4 rounded-full tracking-wide transition-all duration-300"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/images/my-cv.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:border-gold hover:text-gold font-display font-medium text-sm px-7 py-4 rounded-full tracking-wide transition-all duration-300"
            >
              <FiDownload size={15} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-10 md:mt-12"
          >
            {['C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS', 'DSA'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.07 }}
                className="font-mono text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full hover:border-gold/40 hover:text-gold/60 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
