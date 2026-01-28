import { memo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Memoize components for better performance
const MemoizedNavbar = memo(Navbar)
const MemoizedHero = memo(Hero)
const MemoizedAbout = memo(About)
const MemoizedSkills = memo(Skills)
const MemoizedProjects = memo(Projects)
const MemoizedCertificates = memo(Certificates)
const MemoizedContact = memo(Contact)
const MemoizedFooter = memo(Footer)

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-x-hidden" style={{ backfaceVisibility: 'hidden' }}>
      <MemoizedNavbar />
      <MemoizedHero />
      <MemoizedAbout />
      <MemoizedSkills />
      <MemoizedProjects />
      <MemoizedCertificates />
      <MemoizedContact />
      <MemoizedFooter />
    </div>
  );
}
