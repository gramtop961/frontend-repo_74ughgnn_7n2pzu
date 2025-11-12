import React from 'react'
import Section from './Section'

const items = [
  {
    title: 'End-to-end strategy, not just posts',
    desc: 'From research and positioning to creative systems and reporting.'
  },
  {
    title: 'Bilingual AR/EN storytelling',
    desc: 'Culturally fluent narratives that travel across audiences.'
  },
  {
    title: 'Data-driven iteration and reporting',
    desc: 'Clear metrics, fast loops, real outcomes.'
  },
  {
    title: 'Fast creative sprints and reliable delivery',
    desc: 'Momentum over noise—ship what matters.'
  },
]

export default function Benefits() {
  return (
    <Section id="benefits" title="Advantages">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ transformStyle: 'preserve-3d' }}>
            <div className="h-20 rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-transparent mb-4 group-hover:shadow-[0_0_30px_-10px_var(--accent)]" />
            <div className="font-medium">{it.title}</div>
            <div className="mt-2 text-sm text-black/70 dark:text-white/70">{it.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
