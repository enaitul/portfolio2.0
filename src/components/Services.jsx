import { motion } from 'framer-motion'
import { FiGlobe, FiCode, FiTerminal } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: FiGlobe,
    title: 'Web Development',
    description:
      'Creating responsive and interactive websites using HTML, CSS, JavaScript, and Bootstrap. From landing pages to full web apps.',
    link: '#portfolio',
    linkLabel: 'See Projects',
    accent: 'from-gold/20 to-transparent',
  },
  {
    icon: FiCode,
    title: 'Problem Solving',
    description:
      'Efficient solutions for complex problems using C++, C, and core Data Structures & Algorithms. Competitive programming mindset.',
    link: 'https://codolio.com/profile/enaitulhoque',
    linkLabel: 'Codolio Profile',
    accent: 'from-blue-400/20 to-transparent',
    external: true,
  },
  {
    icon: FiTerminal,
    title: 'Python Scripting',
    description:
      'Automation and scripting tasks using Python to boost productivity and streamline workflows. Clean, maintainable scripts.',
    link: 'https://github.com/enaitul',
    linkLabel: 'GitHub',
    accent: 'from-green-400/20 to-transparent',
    external: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute right-0 top-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-padding">
        <SectionHeading number="02" subtitle="What I Do" title="My Services" />

        {/* ✅ MOBILE FIX: 1 col on mobile, 3 cols on md+ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden cursor-default hover:border-gold/30 transition-colors duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-dark-3 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                  <service.icon className="text-gold" size={22} />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  target={service.external ? '_blank' : undefined}
                  rel={service.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 font-display font-semibold text-sm text-gold/70 hover:text-gold transition-colors duration-300"
                >
                  {service.linkLabel}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              <span className="absolute bottom-4 right-6 font-display font-black text-6xl text-white/[0.03] select-none">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
