import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const logoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const githubVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-2xl shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-padding grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Logo with welcome dropdown */}
          <div
            className="relative justify-self-start"
            onMouseEnter={() => setShowWelcome(true)}
            onMouseLeave={() => setShowWelcome(false)}
          >
            <motion.a
              href="#home"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="font-nav font-bold text-2xl tracking-tight inline-block"
            >
              <span className="text-white">Enait</span>
              <motion.span
                className="text-gold inline-block"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              >
                .
              </motion.span>
            </motion.a>

            <AnimatePresence>
              {showWelcome && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 mt-3 bg-dark-3/95 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-full px-5 py-3 shadow-2xl shadow-black/40 z-50 w-64 lg:w-auto lg:whitespace-nowrap"
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-6 w-3 h-3 bg-dark-3/95 border-l border-t border-white/10 rotate-45" />

                  <p className="font-body text-white/90 text-sm">
                    <span className="text-gold font-semibold">Hi there!</span> 👋 Welcome to my portfolio. Feel free to explore my work and get in touch!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center justify-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative inline-flex items-center justify-center font-nav font-semibold text-base px-4 py-2 rounded-xl transition-colors duration-300 hover:bg-white/[0.04] ${
                    active === link.label
                      ? 'text-gold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}

                  {/* Active underline */}
                  {active === link.label && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 justify-self-end">
            <motion.a
              href="https://github.com/enaitul"
              target="_blank"
              rel="noopener noreferrer"
              variants={githubVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(255, 204, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-gold text-dark font-nav font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gold-dark"
            >
              <FiGithub size={16} />
              GitHub
            </motion.a>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-5 md:hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-5 right-6 text-white/60 hover:text-gold p-2 transition-colors"
            >
              <FiX size={28} />
            </motion.button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => { setActive(link.label); setIsOpen(false) }}
                className={`font-nav font-bold text-4xl sm:text-5xl transition-colors py-1 ${
                  active === link.label ? 'text-gold' : 'text-white/70 hover:text-gold'
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="https://github.com/enaitul"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.15 + navLinks.length * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 204, 0, 0.3)' }}
              className="flex items-center gap-2.5 border-2 border-gold text-gold font-nav font-bold text-lg px-7 py-3.5 rounded-full mt-4"
            >
              <FiGithub size={20} />
              GitHub
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
