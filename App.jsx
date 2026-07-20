import React, { useState, useMemo } from 'react'
import projects from './projects.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')

  const sorted = useMemo(
    () => [...projects].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  )

  return (
    <div className={`app ${theme}`} data-theme={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects projects={sorted} />
      <Contact />
      <Footer />
    </div>
  )
}
