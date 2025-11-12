import React from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Monitor, Menu } from 'lucide-react'

export default function Header({ onNav }) {
  const { theme, resolved, toggle, setTheme } = useTheme()

  const ThemeIcon = resolved === 'dark' ? Moon : resolved === 'light' ? Sun : Monitor

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
      resolved === 'dark' ? 'bg-black/30 backdrop-blur-md' : 'bg-white/60 backdrop-blur-md'
    }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2" aria-label="Open Menu">
            <Menu className="h-6 w-6" />
          </button>
          <a href="#top" className="font-semibold tracking-tight text-lg">
            Mo / Editorial
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { id: 'work', label: 'Work' },
            { id: 'about', label: 'About' },
            { id: 'modes', label: 'Modes' },
            { id: 'tools', label: 'Workflow' },
            { id: 'testimonials', label: 'Trust' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm hover:opacity-80">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle Theme"
            title={`Theme: ${theme}`}
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
