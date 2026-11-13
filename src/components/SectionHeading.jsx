import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ number, title, subtitle, intro }) {
  const [isOpen, setIsOpen] = useState(false)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (headingRef.current && !headingRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div
      ref={headingRef}
      className="group mb-12 w-fit cursor-pointer select-none"
      onClick={() => setIsOpen((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsOpen((prev) => !prev)
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false)
        }
      }}
      aria-expanded={isOpen}
      aria-label={`Toggle description for ${title}`}
    >
      {intro && (
        <p
          className={`overflow-hidden font-body text-sm text-white/65 transition-[max-height,opacity,margin] duration-300 ease-out ${
            isOpen
              ? 'mb-2 max-h-24 opacity-100'
              : 'mb-0 max-h-0 opacity-0 group-hover:mb-2 group-hover:max-h-24 group-hover:opacity-100'
          }`}
        >
          {intro}
        </p>
      )}
      {number && subtitle && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-gold/60 text-sm tracking-[0.3em] uppercase block mb-3"
        >
          {number} — {subtitle}
        </motion.span>
      )}
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
