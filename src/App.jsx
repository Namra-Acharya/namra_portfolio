import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import NexusGroups from './components/NexusGroups'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Resume />
      <Certificates />
      <NexusGroups />
      <Contact />
      <Footer />
    </div>
  )
}
