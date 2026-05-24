import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
