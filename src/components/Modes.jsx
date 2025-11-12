import React from 'react'
import Section from './Section'

const modes = [
  { title: 'Retainer', desc: 'Ongoing strategy, content systems, reporting', cta: 'Select' },
  { title: 'Campaign', desc: 'Concept to launch for a goal and timeline', cta: 'Select' },
  { title: 'Intensive', desc: '2-week sprint to fix, optimize, or launch', cta: 'Select' },
]

export default function Modes() {
  return (
    <Section id="modes" title="Choose your mode">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modes.map((m) => (
          <div key={m.title} className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <div className="font-semibold">{m.title}</div>
            <div className="mt-2 text-sm text-black/70 dark:text-white/70">{m.desc}</div>
            <button className="mt-4 inline-flex rounded-full px-4 py-2 bg-[var(--accent)] text-white">{m.cta}</button>
          </div>
        ))}
      </div>
    </Section>
  )
}
