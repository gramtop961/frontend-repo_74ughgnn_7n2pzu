import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Projects from './components/Projects'
import Modes from './components/Modes'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-700">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Projects />
          <Modes />
          <Workflow />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
