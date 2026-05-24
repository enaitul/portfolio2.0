import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import userPhoto from '../assets/images/user.jpg'

const tabs = [
  {
    id: 'skills',
    label: 'Skills',
    content: [
      { title: 'Languages', desc: 'C, C++, Java, Python, JavaScript' },
      { title: 'Frontend', desc: 'React, HTML, CSS, Tailwind CSS, Bootstrap, Framer Motion' },
      { title: 'Backend', desc: 'Node.js, Express.js, REST APIs' },
      { title: 'Database & Tools', desc: 'MongoDB, Pinecone, Git, GitHub, Vercel' },
      { title: 'Core CS', desc: 'Data Structures, Algorithms, OOP, System Design' },
    ],
  },
  {
    id: 'experience',
    label: 'Experience',
    content: [
      { title: 'Freelance Web Developer', desc: 'Building responsive websites and web apps for local clients — delivering production-ready solutions' },
      { title: '2× Hackathon Winner', desc: 'Won two hackathons with Logwatch AI — an AI-powered platform for system reliability and safe deployments' },
      { title: '200+ DSA Problems Solved', desc: 'Across LeetCode, CodeStudio, and GeeksforGeeks — strong problem-solving and algorithmic thinking' },
      { title: 'Seeking Internships', desc: 'Actively looking for software engineering / fullstack internship opportunities' },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    content: [
      { title: '2023 – 2027', desc: 'B.Tech in CSE — Techno International New Town' },
      { title: '2021', desc: '12th — Netaji Subhas Public School (DAV Educational Society)' },
    ],
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-padding">
        <SectionHeading number="01" subtitle="Who I Am" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Static gold border — no hover transition */}
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl" />

              <img
                src={userPhoto}
                alt="Md Enaitul Hoque"
                className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-xl object-contain"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-4 bg-gold text-dark font-display font-bold text-sm px-5 py-3 rounded-xl shadow-xl shadow-gold/20"
              >
                B.Tech CSE
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 lg:mt-0"
          >
            <p className="font-body text-white/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10">
              I'm <span className="text-white font-medium">Md Enaitul Hoque</span>, a fullstack
              developer and CSE undergraduate who builds production-ready web applications.
              A <span className="text-gold font-medium">2× hackathon winner</span> with <span className="text-gold font-medium">200+ DSA problems</span> solved,
              I combine strong engineering fundamentals with real-world freelancing experience.
              Currently seeking internship opportunities to grow further.
            </p>

            {/* Tabs — full width on mobile so buttons don't overflow */}
            <div className="flex gap-1 bg-dark-3 p-1 rounded-xl mb-8 w-full sm:w-fit overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative font-display font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap flex-1 sm:flex-none ${
                    activeTab === tab.id ? 'text-dark' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gold rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {active.content.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0" />
                    <div>
                      <span className="font-display font-bold text-gold text-sm block mb-0.5">
                        {item.title}
                      </span>
                      <span className="font-body text-white/60 text-sm">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
