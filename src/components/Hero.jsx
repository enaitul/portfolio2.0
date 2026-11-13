import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import heroBg from '../assets/images/background-ai.png'

const roles = [
  'Competitive programmer',
  'Fullstack developer',
  'Building Agentic AI Systems',
  '2x Hackathon winner',
]

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with a subtle brightness & clarity lift */}
      <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[1.14] contrast-[1.04]" />

      {/* Gradients: deep dark on the left for text contrast, open/transparent on the right to let light through to the face */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 via-45% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/15" />

      {/* Soft natural neutral light directly on the face (no yellow/amber cast) */}
      <div className="absolute top-[22%] right-[8%] sm:right-[14%] w-80 sm:w-96 h-80 sm:h-96 bg-white/12 rounded-full blur-[90px] pointer-events-none mix-blend-screen" />

      {/* Subtle brand gold ambient glow kept away from the face towards the lower-center */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
          {/* Interactive name block with smooth hover reveal */}
          <div
            className="relative block w-fit cursor-pointer select-none mb-8 md:mb-10 group/name"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered((prev) => !prev)}
            aria-label="Hover or tap to reveal highlights"
          >
            <motion.div
              animate={{
                scale: isHovered ? 0.9 : 1,
                y: isHovered ? -14 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left top' }}
            >
              <div className="overflow-hidden mb-3">
                <motion.p
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-body text-white/50 text-lg md:text-2xl tracking-wide"
                >
                  Hi, I'm
                </motion.p>
              </div>

              <div className="overflow-visible mb-2">
                <motion.h1
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
                >
                  <span className="text-white">Md Enaitul</span>
                  <br />
                  <span className="text-gold relative">
                    Hoque
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left"
                    />
                  </span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Bullet points appearing one by one */}
            <motion.div
              initial={false}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
                marginTop: isHovered ? 16 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <motion.ul
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.08,
                    },
                  },
                }}
                className="space-y-2.5 sm:space-y-3 pt-2 pb-1 pl-4 sm:pl-6"
              >
                {roles.map((role) => (
                  <motion.li
                    key={role}
                    variants={{
                      hidden: { opacity: 0, x: -22, y: 8 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="flex items-center gap-3 text-white/90 text-base sm:text-lg md:text-xl font-medium tracking-wide"
                  >
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/50 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_#FFCC00]" />
                    </span>
                    <span className="transition-colors duration-200 hover:text-gold">{role}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04, backgroundColor: '#e6b800' }}
              whileTap={{ scale: 0.97 }}
              className="text-center bg-gold text-dark font-sans font-semibold text-sm px-7 py-4 rounded-full tracking-wide transition-all duration-300"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/images/cv.pdf"
              download="Md-Enaitul-Hoque-CV.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:border-gold hover:text-gold font-sans font-medium text-sm px-7 py-4 rounded-full tracking-wide transition-all duration-300"
            >
              <FiDownload size={15} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-10 md:mt-12"
          >
            {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'C++', 'Java', 'Python', 'Tailwind CSS', 'DSA'].map((tech, i) => (
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


    </section>
  )
}
