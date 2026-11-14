import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub, FiLock } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const projects = [
  {
    id: 'repopilot', name: 'RepoPilot',
    description: 'An AI developer productivity and repository intelligence agent for code analysis, refactoring, debugging, and automated development workflows. Includes semantic repository search, cited code answers, isolated refactoring, test generation, and approval gated GitHub workflows.',
    technologies: ['Python', 'FastAPI', 'RAG', 'Sentence-Transformers', 'FAISS', 'Groq LLM', 'Docker', 'Git API', 'JavaScript', 'Render'],
    categories: ['Agentic AI', 'Full Stack', 'APIs'], image: '/images/Repopilot.png',
    liveUrl: 'https://repopilot-qcus.onrender.com/',
    githubUrl: 'https://github.com/enaitul/Repo-Pilot',
  },
  {
    id: 'midnight', name: 'midnight.',
    description: 'A writing focused social blogging platform for sharing thoughts, poems, and creative work. Features multimedia publishing, drafts, secure APIs, Google sign in, real time messaging, profiles, follows, bookmarks, and searchable discovery.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Flask-SocketIO', 'JWT', 'Docker', 'Supabase', 'Render'],
    categories: ['Full Stack', 'APIs'], image: '/images/Midnight.png',
    liveUrl: 'https://midnight-7e0x.onrender.com/', githubUrl: 'https://github.com/enaitul/midnight',
  },
  {
    id: 'logwatch-ai', name: 'Logwatch AI',
    description: 'An AI powered infrastructure reliability platform combining intelligent traffic routing, RAG based log analysis, and autonomous agents to detect system failures and coordinate rollback or recovery.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Pinecone', 'Hugging Face', 'Groq', 'Three.js'],
    categories: ['Agentic AI', 'Full Stack', 'APIs'], image: '/images/LogwatchAI.png',
    liveUrl: 'https://logwatchai.vercel.app/',
    githubUrl: 'https://github.com/kumariluckyraj/LogWatch-AI',
  },
  {
    id: 'enaitgpt', name: 'EnaitGPT',
    description: 'A conversational AI experience built around Gemini, Groq, and OpenRouter APIs.',
    technologies: ['React', 'TypeScript', 'Tailwind'], categories: ['Frontend', 'APIs'],
    image: '/images/Enaitgpt.jpeg', liveUrl: 'https://enait-gpt-app.onrender.com/', privateRepository: true,
  },
  {
    id: 'mehfil-e-dard', name: 'Mehfil-e-Dard',
    description: "A collaborative writer's hub for shayaris, poetry, and creative writing.",
    technologies: ['HTML', 'CSS', 'JavaScript'], categories: ['Frontend'],
    image: '/images/mehfil.jpg', liveUrl: 'https://mehfil-e-dard.vercel.app', githubUrl: 'https://github.com/enaitul/Mehfil-e-dard',
  },
  {
    id: 'amazon-clone', name: 'Amazon Clone',
    description: 'A responsive e-commerce homepage recreating the familiar Amazon shopping layout.',
    technologies: ['HTML', 'CSS'], categories: ['Frontend'],
    image: '/images/amazon.webp', liveUrl: 'https://amazon-clone-wine-iota.vercel.app/', githubUrl: 'https://github.com/enaitul/Amazon-clone-',
  },
  {
    id: 'netflix-landing', name: 'Netflix Landing Page',
    description: 'A responsive landing page inspired by the Netflix homepage.',
    technologies: ['HTML', 'CSS', 'Bootstrap'], categories: ['Frontend'],
    image: '/images/netflix.jpg', liveUrl: 'https://netflix-clone-jgpn.vercel.app/', githubUrl: 'https://github.com/enaitul/Netflix-clone',
  },
  {
    id: 'simon-says', name: 'Simon Says Game',
    description: 'An interactive memory game inspired by the classic Simon Says game.',
    technologies: ['HTML', 'CSS', 'JavaScript'], categories: ['Frontend'],
    image: '/images/simonsays.jpg', liveUrl: 'https://simonsays-game-js.vercel.app/', githubUrl: 'https://github.com/enaitul/Simonsays-game-js',
  },
]

const categories = ['All', 'Agentic AI', 'Frontend', 'Full Stack', 'APIs']

const getTruncatedText = (text, maxLength = 110) => {
  if (text.length <= maxLength) return text
  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  const cut = lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed
  return cut.replace(/[.,;:\s]+$/, '')
}

// Big hollow outline rank number, sits behind/beside the card
function RankNumber({ rank }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none flex-shrink-0"
      style={{
        fontFamily: '"Inter", Arial, sans-serif',
        fontSize: 'clamp(7.5rem, 13vw, 12rem)',
        lineHeight: 0.95,
        WebkitTextStroke: '3.5px rgba(255,255,255,0.4)',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        userSelect: 'none',
        alignSelf: 'flex-end',
        marginRight: '-0.28em',
        paddingBottom: '0.04em',
        zIndex: 0,
        fontWeight: 900,
      }}
    >
      {rank}
    </div>
  )
}

function ProjectCard({ project, rank }) {
  const [tapped, setTapped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const infoVisible = tapped
  const isLongDescription = project.description.length > 110

  return (
    // Outer wrapper: flex row — number first, then card overlaps it slightly
    <div className="flex items-end">
      <RankNumber rank={rank} />

      {/* Card — z-10 so it sits on top of the number */}
      <motion.article
        layout
        className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/50 focus-within:border-gold/50 cursor-pointer flex-shrink-0"
        style={{ width: 'clamp(200px, 25vw, 300px)', aspectRatio: '2/3' }}
        onMouseEnter={() => {
          if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setTapped(true)
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            setTapped(false)
            setIsExpanded(false)
          }
        }}
      >
        <img
          src={project.image}
          alt={`${project.name} cover`}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${infoVisible ? 'scale-110' : 'scale-100'}`}
          loading="lazy"
        />

        {/* Gradient + name always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
        <h3 className={`absolute bottom-0 left-0 right-0 px-3.5 py-3 font-sans font-bold text-sm sm:text-base leading-tight text-white transition-opacity duration-300 ${infoVisible ? 'opacity-0' : 'opacity-100'}`}>
          {project.name}
        </h3>

        {/* Invisible click target */}
        <button
          type="button"
          aria-label={`${infoVisible ? 'Hide' : 'Show'} details for ${project.name}`}
          aria-expanded={infoVisible}
          onClick={() => setTapped((v) => window.matchMedia('(hover: none)').matches ? !v : true)}
          onBlur={(e) => {
            if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
              setTapped(false)
              setIsExpanded(false)
            }
          }}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-gold"
        >
          <span className="sr-only">Toggle project details</span>
        </button>

        {/* Hover overlay — project details */}
        <div
          className={`absolute inset-0 z-20 flex flex-col p-3.5 sm:p-4 transition-all duration-300 ${infoVisible ? 'visible opacity-100' : 'invisible opacity-0'} ${isExpanded ? 'bg-black/92' : 'bg-black/85'}`}
          aria-hidden={!infoVisible}
          onClick={(e) => { if (e.target === e.currentTarget) { setTapped(false); setIsExpanded(false) } }}
        >
          {/* Live link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
              className={`absolute left-1/2 z-30 flex items-center justify-center rounded-full border border-gold/70 bg-gold text-dark shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white ${isExpanded ? 'top-[14%] h-9 w-9 -translate-x-1/2 -translate-y-1/2' : 'top-[35%] h-11 w-11 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={isExpanded ? 15 : 18} />
            </a>
          )}

          {/* Info block at the bottom */}
          <div className={`mt-auto w-full transition-all duration-300 ${isExpanded ? '-translate-y-1' : ''}`}>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <h3 className="font-sans font-bold text-white text-sm sm:text-base leading-tight truncate">{project.name}</h3>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-white hover:border-gold hover:text-gold transition-colors"
                  onClick={(e) => e.stopPropagation()}>
                  <FiGithub size={13} />
                </a>
              )}
              {project.privateRepository && (
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70">
                  <FiLock size={12} />
                </span>
              )}
            </div>

            <div className="mb-2 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span key={tech} className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 font-sans text-[9px] sm:text-[10px] leading-none text-white/75">{tech}</span>
              ))}
            </div>

            <p
              onClick={(e) => { e.stopPropagation(); if (isLongDescription) setIsExpanded(!isExpanded) }}
              className={`text-white/70 text-[11px] sm:text-xs leading-relaxed ${isLongDescription ? 'cursor-pointer hover:text-white/90' : ''}`}
            >
              {isLongDescription && !isExpanded ? (
                <>
                  {getTruncatedText(project.description, 110)}
                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsExpanded(true) }}
                    className="inline-flex items-center px-1 font-bold text-gold hover:text-white cursor-pointer ml-0.5">...</button>
                </>
              ) : (
                <>
                  {project.description}
                  {isLongDescription && isExpanded && (
                    <button type="button" onClick={(e) => { e.stopPropagation(); setIsExpanded(false) }}
                      className="inline-flex ml-1.5 text-[10px] sm:text-[11px] font-semibold text-gold/80 hover:text-gold hover:underline"
                    >(less)</button>
                  )}
                </>
              )}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const trackRef = useRef(null)
  const filteredProjects = useMemo(() => activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeCategory)), [activeCategory])

  const selectCategory = (category) => {
    setActiveCategory(category)
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const moveCarousel = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.snap-start')
    const scrollAmount = card ? card.clientWidth : track.clientWidth * 0.6
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }

  const updateArrowVisibility = () => {
    const track = trackRef.current
    if (!track) return
    setCanScrollLeft(track.scrollLeft > 1)
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
  }

  useEffect(() => {
    updateArrowVisibility()
    const frame = window.requestAnimationFrame(updateArrowVisibility)
    const timer = setTimeout(updateArrowVisibility, 200)
    window.addEventListener('resize', updateArrowVisibility)
    return () => {
      window.cancelAnimationFrame(frame)
      clearTimeout(timer)
      window.removeEventListener('resize', updateArrowVisibility)
    }
  }, [filteredProjects])

  return (
    <section id="portfolio" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="section-padding">
        <SectionHeading title="Portfolio" intro="I am passionate about building and implementing practical software." />

        {/* Category filter */}
        <nav aria-label="Filter projects" className="mb-10 -mx-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-7 px-2 sm:gap-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
                className={`relative py-2 font-sans text-sm transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-gold after:transition-all after:duration-300 ${activeCategory === category ? 'font-semibold text-white after:w-1/2' : 'font-normal text-white/50 after:w-0 hover:text-white/85 hover:after:w-1/4'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Netflix-style rank carousel */}
        <div className="group/carousel relative">
          {/* Desktop arrow buttons */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden opacity-0 transition-opacity duration-200 group-hover/carousel:opacity-100 sm:block">
            {canScrollLeft && (
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Scroll projects left"
                className="pointer-events-auto absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-dark/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-gold hover:text-gold">
                <FiArrowLeft size={22} />
              </button>
            )}
            {canScrollRight && (
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Scroll projects right"
                className="pointer-events-auto absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-dark/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-gold hover:text-gold">
                <FiArrowRight size={22} />
              </button>
            )}
          </div>

          {/* Scroll track — extra bottom padding so rank numbers don't clip */}
          <div
            ref={trackRef}
            onScroll={updateArrowVisibility}
            className="flex items-end gap-2 sm:gap-3 overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  className="snap-start shrink-0"
                >
                  <ProjectCard project={project} rank={index + 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Swipe hint with animated arrows */}
        <div className="mt-2 flex items-center gap-2.5 text-xs text-white/45 select-none">
          {canScrollLeft && (
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous projects"
              className="flex items-center text-gold hover:text-white transition-colors cursor-pointer">
              <motion.span
                animate={{ x: [-1, -5, -1], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center"
              >
                <FiArrowLeft size={13} />
              </motion.span>
            </button>
          )}
          <span className="tracking-wide">Swipe to explore</span>
          {canScrollRight && (
            <button type="button" onClick={() => moveCarousel(1)} aria-label="More projects"
              className="flex items-center text-gold hover:text-white transition-colors cursor-pointer">
              <motion.span
                animate={{ x: [1, 5, 1], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center"
              >
                <FiArrowRight size={13} />
              </motion.span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
