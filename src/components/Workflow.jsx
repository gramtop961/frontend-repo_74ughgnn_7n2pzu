import React from 'react'
import Section from './Section'

const steps = ['Discover', 'Strategy', 'Create', 'Ship', 'Learn']
const tools = ['Adobe CC', 'Webflow', 'Framer', 'Analytics', 'GA4', 'Meta/TikTok Ads', 'AI tools']

export default function Workflow() {
  return (
    <Section id="tools" title="Simple workflow. Modern stack.">
      <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
        <div className="flex items-center justify-between text-sm">
          {steps.map((s, i) => (
            <div key={s} className="relative flex-1 text-center">
              <div className="px-2 py-2 font-medium">{s}</div>
              {i < steps.length - 1 && <div className="absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[var(--accent)]/60 to-transparent" />}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {tools.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full border border-black/10 dark:border-white/10">{t}</span>
          ))}
        </div>
        <div className="mt-4 text-sm text-black/70 dark:text-white/70">Ready to plug into your stack in 15 minutes.</div>
      </div>
    </Section>
  )
}
