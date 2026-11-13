import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import userPhoto from '../assets/images/user.jpg'

const achievements = [
  { value: '2x', label: 'Hackathon Winner' },
  { value: '500+', label: 'DSA Problems' },
  { value: '1', label: 'Freelance Project' },
  { value: '5+', label: 'Projects Built' },
]

const tabs = [
  {
    id: 'skills', label: 'Skills', content: [
      { title: 'Languages', desc: 'Python, JavaScript (ES6+), Java, C, C++' },
      { title: 'Frontend', desc: 'React.js, HTML5, CSS3, Bootstrap, Three.js, Responsive Web Design' },
      { title: 'AI / ML Stack', desc: 'Hugging Face, Groq, Pinecone (RAG), LLM Integration' },
      { title: 'Database', desc: 'MongoDB, SQL' },
      { title: 'DSA / Problem Solving', desc: 'Data Structures, Algorithms, Dynamic Programming, Graph Theory' },
      { title: 'Tools', desc: 'Git, GitHub, Vercel, VS Code, LeetCode, Coding Ninjas' },
    ],
  },
  {
    id: 'experience', label: 'Experience', content: [
      { title: 'Project experience', desc: 'Practical development through independent and collaborative software projects.' },
      { title: 'Logwatch AI', desc: 'AI-powered infrastructure reliability with RAG log analysis and autonomous recovery agents.' },
      { title: 'RepoPilot', desc: 'Repository intelligence agent for code analysis, refactoring, debugging, and development workflows.' },
      { title: 'midnight.', desc: 'Full-stack social blogging platform with real-time messaging and multimedia publishing.' },
    ],
  },
  {
    id: 'education', label: 'Education', content: [
      { title: '2023 – 2027', desc: 'B.Tech in Computer Science and Engineering, Techno International New Town.' },
      { title: 'Netaji Subhas Public School (Run by DAV Education Society) | 2021', desc: 'School education.' },
      { title: 'Achievements', desc: '1st place at Tesseract 2026 and Prabuddha 2026; SIH 2025 Internal Qualifier.' },
    ],
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const [expanded, setExpanded] = useState(false)
  const reduceMotion = useReducedMotion()
  const active = tabs.find((tab) => tab.id === activeTab)

  const revealOnHover = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setExpanded(true)
  }

  return (
    <section id="about" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="section-padding">
        <SectionHeading title="About Me" intro="A Computer Science student passionate about solving problems and building useful systems." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md mx-auto lg:mx-0"
            onMouseEnter={revealOnHover}
            onMouseLeave={() => {
              if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setExpanded(false)
            }}
          >
            <motion.button
              type="button"
              aria-label="Show or hide achievements"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => window.matchMedia('(hover: hover) and (pointer: fine)').matches ? true : !value)}
              onBlur={(event) => {
                if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) setExpanded(false)
              }}
              animate={{ y: expanded && !reduceMotion ? -5 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
              className="block w-full rounded-2xl overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <img src={userPhoto} alt="Md Enaitul Hoque" className="block aspect-[4/5] w-full object-cover object-[70%_center]" />
            </motion.button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24 }}
                  className="mt-4 grid grid-cols-4 gap-2 sm:gap-3"
                >
                  {achievements.map((item) => (
                    <div key={item.label} className="min-w-0 rounded-xl border border-white/10 bg-card px-1.5 py-3 text-center sm:px-2 sm:py-4">
                      <span className="block font-sans font-semibold text-gold text-base sm:text-xl">{item.value}</span>
                      <span className="block mt-1 font-sans text-white/55 text-[9px] leading-tight sm:text-[11px]">{item.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <p className="sr-only">Tap or activate the photograph to reveal four achievements.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p className="font-body text-white/65 text-sm md:text-base leading-relaxed mb-8">
              I’m <span className="text-white font-medium">Md Enaitul Hoque</span>, a Computer Science undergraduate pursuing a B.Tech in Computer Science and Engineering at Techno International New Town (2023–2027). I’m passionate about programming, data structures and algorithms, full-stack development, and Agentic AI systems. I’ve solved 500+ problems across LeetCode, Coding Ninjas, and other platforms, and I’m a 2x hackathon winner. My projects span AI-powered infrastructure, RAG pipelines, autonomous agents, repository intelligence, and full-stack applications. I enjoy solving challenging problems and building practical software systems.
            </p>

            <div role="tablist" aria-label="About details" className="flex gap-1 border-b border-white/10 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-sans font-medium text-xs sm:text-sm px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? 'text-gold border-gold' : 'text-white/50 border-transparent hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={activeTab}
                role="tabpanel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="space-y-4"
              >
                {active.content.map((item) => (
                  <li key={item.title} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    <div>
                      <span className="font-sans font-semibold text-white text-sm block mb-1">{item.title}</span>
                      <span className="font-body text-white/55 text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
