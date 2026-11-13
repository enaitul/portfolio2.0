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
    image: '/images/Enaitgpt.jpeg', liveUrl: 'https://enaitgpt.vercel.app', privateRepository: true,
  },
  {
    id: 'mehfil-e-dard', name: 'Mehfil-e-Dard',
    description: 'A collaborative writer’s hub for shayaris, poetry, and creative writing.',
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

const getTruncatedText = (text, maxLength = 145) => {
  if (text.length <= maxLength) return text
  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  const cut = lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed
  return cut.replace(/[.,;:\s]+$/, '')
}

function ProjectCard({ project }) {
  const [tapped, setTapped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const infoVisible = tapped
  const preserveCover = ['logwatch-ai', 'repopilot', 'midnight'].includes(project.id)
  const isLongDescription = project.description.length > 150

  return (
    <motion.article
      layout
      className="group relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl shadow-black/25 focus-within:border-gold/50"
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
        alt={`${project.name} project cover`}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${preserveCover ? 'scale-100' : infoVisible ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <h3 className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 font-display font-bold text-lg sm:text-xl leading-tight text-white decoration-gold decoration-2 underline-offset-4 transition-all duration-300 ${infoVisible ? 'opacity-0' : 'opacity-100 group-hover:underline'}`}>
        {project.name}
      </h3>
      <button
        type="button"
        aria-label={`${infoVisible ? 'Hide' : 'Show'} details for ${project.name}`}
        aria-expanded={infoVisible}
        onClick={() => setTapped((value) => window.matchMedia('(hover: none)').matches ? !value : true)}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
            setTapped(false)
            setIsExpanded(false)
          }
        }}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-gold"
      >
        <span className="sr-only">Toggle project details</span>
      </button>
      <div
        className={`absolute inset-0 z-20 flex flex-col p-4 sm:p-5 transition-all duration-300 ${infoVisible ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'} ${isExpanded ? 'bg-black/90' : 'bg-black/80'}`}
        aria-hidden={!infoVisible}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setTapped(false)
            setIsExpanded(false)
          }
        }}
      >
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} website`}
            className={`absolute left-1/2 z-30 flex items-center justify-center rounded-full border border-gold/70 bg-gold text-dark shadow-lg shadow-black/40 transition-all duration-300 hover:scale-110 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              isExpanded
                ? 'top-[16%] h-10 w-10 -translate-x-1/2 -translate-y-1/2'
                : 'top-[36%] h-12 w-12 sm:h-13 sm:w-13 -translate-x-1/2 -translate-y-1/2'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <FiExternalLink size={isExpanded ? 16 : 20} />
          </a>
        )}
        <div className={`mt-auto w-full transition-all duration-300 ${isExpanded ? '-translate-y-1.5 sm:-translate-y-2' : 'translate-y-0'}`}>
          <div className="mb-2 sm:mb-2.5 flex items-center justify-between gap-3">
            <h3 className="font-display font-bold text-white text-lg sm:text-xl leading-tight">{project.name}</h3>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source on GitHub`} className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white hover:border-gold hover:text-gold transition-colors" onClick={(event) => event.stopPropagation()}>
                <FiGithub size={15} />
              </a>
            )}
            {project.privateRepository && (
              <span title="Private GitHub repository" aria-label={`${project.name} has a private GitHub repository`} className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70">
                <FiLock size={14} />
              </span>
            )}
          </div>
          <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Tech stack</p>
          <div className="mb-2 sm:mb-2.5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 font-sans text-[10px] leading-none text-white/80">{tech}</span>
            ))}
          </div>
          <p
            onClick={(e) => {
              e.stopPropagation()
              if (isLongDescription) setIsExpanded(!isExpanded)
            }}
            className={`text-white/75 text-xs leading-relaxed transition-colors ${isLongDescription ? 'cursor-pointer hover:text-white/90' : ''}`}
          >
            {isLongDescription && !isExpanded ? (
              <>
                {getTruncatedText(project.description, 145)}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(true)
                  }}
                  className="inline-flex items-center px-1 py-0.5 ml-1 font-bold text-gold hover:text-white cursor-pointer rounded transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
                  aria-label={`Show full description for ${project.name}`}
                  title="Show full description"
                >
                  ...
                </button>
              </>
            ) : (
              <>
                {project.description}
                {isLongDescription && isExpanded && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsExpanded(false)
                    }}
                    className="inline-flex items-center ml-1.5 text-[11px] font-semibold text-gold/80 hover:text-gold hover:underline cursor-pointer"
                    aria-label={`Show less description for ${project.name}`}
                  >
                    (less)
                  </button>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </motion.article>
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
    const scrollAmount = card ? (card.clientWidth + 20) : track.clientWidth * 0.8
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
    window.addEventListener('resize', updateArrowVisibility)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', updateArrowVisibility)
    }
  }, [filteredProjects])

  return (
    <section id="portfolio" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="section-padding">
        <SectionHeading title="Portfolio" intro="I am passionate about building and implementing practical software." />

        <nav aria-label="Filter projects" className="mb-8 -mx-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

        <div className="group/carousel relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden opacity-0 transition-opacity duration-200 group-hover/carousel:opacity-100 sm:block">
            {canScrollLeft && <button type="button" onClick={() => moveCarousel(-1)} aria-label="Scroll projects left" className="pointer-events-auto absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-dark/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"><FiArrowLeft size={24} /></button>}
            {canScrollRight && <button type="button" onClick={() => moveCarousel(1)} aria-label="Scroll projects right" className="pointer-events-auto absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-dark/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"><FiArrowRight size={24} /></button>}
          </div>
          <div
            ref={trackRef}
            onScroll={updateArrowVisibility}
            className="flex gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-4 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  className="snap-start shrink-0 w-[min(86vw,360px)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/35">Scroll to explore projects</p>
      </div>
    </section>
  )
}
