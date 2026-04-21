import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const socials = [
  { icon: FiFacebook, href: 'https://www.facebook.com/profile.php?id=100095126572766', label: 'Facebook' },
  { icon: FiTwitter, href: 'https://x.com/iam_enait', label: 'Twitter' },
  { icon: FiInstagram, href: 'https://www.instagram.com/enaitulhoque/', label: 'Instagram' },
  { icon: FiLinkedin, href: 'http://www.linkedin.com/in/mdenaitulhoque', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/enaitul', label: 'GitHub' },
]

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzmA4q3nRXBAU2LI-3wYslz1Fg2Jh2HCQuFZTdy9ZUZQ5XpF-jLAraIvIvKdJNBLyEK5g/exec'

export default function Contact() {
  const [form, setForm] = useState({ Name: '', Email: '', Message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    Object.entries(form).forEach(([k, v]) => formData.append(k, v))

    fetch(SCRIPT_URL, { method: 'POST', body: formData })
      .then((response) => response.json())
      .then(() => {
        setStatus('Message sent successfully!')
        setForm({ Name: '', Email: '', Message: '' })
        setLoading(false)
        setTimeout(() => setStatus(''), 4000)
      })
      .catch((error) => {
        console.error('Error!', error.message)
        setStatus('Something went wrong. Please try again.')
        setLoading(false)
        setTimeout(() => setStatus(''), 4000)
      })
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -right-20 bottom-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding">
        <SectionHeading number="04" subtitle="Get In Touch" title="Contact Me" />

        {/* ✅ MOBILE FIX: single column on mobile, 2 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-white/50 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              Have a project in mind or want to collaborate? I'm open to internships, freelance
              opportunities, and interesting projects. Let's build something great together!
            </p>

            <div className="flex items-center gap-3 mb-8 md:mb-10 group">
              <div className="w-10 h-10 bg-dark-3 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                <FiMail className="text-gold" size={18} />
              </div>
              <a
                href="mailto:mdenaitulhoque@gmail.com"
                className="font-body text-white/60 hover:text-gold transition-colors duration-300 text-sm break-all"
              >
                mdenaitulhoque@gmail.com
              </a>
            </div>

            <div>
              <p className="font-mono text-white/30 text-xs tracking-widest uppercase mb-4">
                Find me on
              </p>
              {/* ✅ MOBILE FIX: flex-wrap so social icons wrap on tiny screens */}
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className="w-11 h-11 bg-dark-3 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <social.icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ✅ MOBILE FIX: stack name/email on xs, side-by-side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={form.Name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-card border border-white/10 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={form.Email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-card border border-white/10 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="Message"
                  value={form.Message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-card border border-white/10 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-dark font-display font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="animate-spin w-4 h-4 border-2 border-dark border-t-transparent rounded-full" />
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`font-body text-sm text-center ${
                    status.includes('success') ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
