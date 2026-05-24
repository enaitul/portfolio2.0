import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const projects = [
  {
    id: 1,
    title: 'Amazon Clone',
    category: 'Web Dev',
    description:
      'A responsive e-commerce homepage built using HTML and CSS, replicating the layout and feel of Amazon.',
    image: '/images/amazon.webp',
    link: 'https://amazon-clone-wine-iota.vercel.app/',
    tags: ['HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Netflix Landing Page',
    category: 'Web Dev',
    description:
      "A stylish landing page built with HTML, CSS, and Bootstrap simulating Netflix's homepage design.",
    image: '/images/netflix.jpg',
    link: 'https://netflix-clone-jgpn.vercel.app/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 3,
    title: 'Simon Says Game',
    category: 'JavaScript',
    description:
      'An interactive memory game built using HTML, CSS, and JavaScript inspired by the classic Simon game.',
    image: '/images/simonsays.jpg',
    link: 'https://simonsays-game-js.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Mehfil-e-Dard',
    category: 'Web Dev',
    description:
      "A writer's hub for shayaris, poetries and more — built collaboratively with a classmate.",
    image: '/images/mehfil.jpg',
    link: 'https://mehfil-e-dard.vercel.app',
    tags: ['HTML', 'CSS', 'JS'],
  },

  {
    id: 5,
    title: 'Logwatch AI',
    category: 'Full Stack',
    description: `AI-powered platform for real-time system reliability and safe deployments.
It combines intelligent traffic routing, RAG-based log analysis, and autonomous AI agents
to detect failures and trigger instant rollback or recovery actions, enabling self-healing
and resilient systems. 2X Hackathon Winner.`,
    image: '/images/logwatch.png',
    link: 'https://logwatchai.vercel.app',
    tags: ['React', 'Pinecone', 'Node.js', 'Hugging Face', 'Groq', 'MongoDB', '3js'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      <div className="section-padding">
        <SectionHeading number="03" subtitle="My Work" title="Portfolio" />

        {/* ✅ MOBILE FIX: 1 col on xs, 2 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-colors duration-500"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-xs text-gold border border-gold/30 bg-dark/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="shrink-0 w-9 h-9 bg-dark-3 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <FiExternalLink size={15} />
                  </motion.a>
                </div>

                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-white/30 border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="font-body text-white/40 text-sm mb-4">More projects coming soon</p>
          <motion.a
            href="https://github.com/enaitul"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:border-gold hover:text-gold font-display font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300"
          >
            View All on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
