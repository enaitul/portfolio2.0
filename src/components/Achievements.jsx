import { motion } from 'framer-motion'
import { FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi'

const stats = [
  {
    icon: FiAward,
    value: '2×',
    label: 'Hackathon Winner',
    desc: 'Logwatch AI',
  },
  {
    icon: FiCode,
    value: '200+',
    label: 'DSA Problems',
    desc: 'LeetCode • CodeStudio • GFG',
  },
  {
    icon: FiUsers,
    value: '1',
    label: 'Freelance Project',
    desc: 'Local Client',
  },
  {
    icon: FiTrendingUp,
    value: '5+',
    label: 'Projects Built',
    desc: 'Fullstack & Frontend',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Achievements() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 pointer-events-none" />

      <div className="section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgba(255, 204, 0, 0.3)' }}
              className="relative bg-card border border-white/5 rounded-2xl p-5 md:p-7 text-center overflow-hidden group cursor-default transition-colors duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-11 h-11 mx-auto bg-dark-3 border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                  <stat.icon className="text-gold" size={20} />
                </div>

                <motion.span
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="font-display font-black text-3xl md:text-4xl text-gold block mb-1"
                >
                  {stat.value}
                </motion.span>

                <span className="font-display font-bold text-white text-sm md:text-base block mb-1">
                  {stat.label}
                </span>

                <span className="font-mono text-white/30 text-xs">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
