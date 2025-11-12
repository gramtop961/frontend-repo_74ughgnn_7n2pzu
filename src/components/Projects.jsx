import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'UNDP Egypt — Partners at Core, GGJAP, ENID Qena, MSME Day',
    impact: '+220% engagement; MSME Day 1.5M+ organic',
    tabs: {
      Challenge: 'Multiple initiatives needed cohesive storytelling and measurable impact.',
      Approach: 'Editorial cadence with human-centered narratives, bilingual deliverables.',
      Impact: 'Engagement up 220%, MSME Day exceeded 1.5M organic reach.'
    }
  },
  {
    title: "KFC & Papa John’s (MENA) — localized bilingual activations; CTR up",
    impact: 'Culturally tuned creatives increased CTR; bilingual content improved reach.',
    tabs: {
      Challenge: 'Crowded QSR space required distinct voice and utility.',
      Approach: 'Localized activations and A/B testing across platforms.',
      Impact: 'Significant CTR lift across placements.'
    }
  },
  {
    title: 'Zone360 & MO4 Network — lifestyle voice, minimalist visuals; +4.8% engagement',
    impact: 'Lifestyle tone with minimalist visuals improved community resonance.',
    tabs: {
      Challenge: 'Diversified audiences with shifting interests.',
      Approach: 'Clarity-forward brand language and tighter creative systems.',
      Impact: '+4.8% engagement sustained over quarters.'
    }
  },
  {
    title: 'Infinix Saudi — product storytelling; strong Gen Z recall',
    impact: 'Narrative arcs positioned features in real life; high brand recall with Gen Z.',
    tabs: {
      Challenge: 'Specs-heavy category needed human translation.',
      Approach: 'Story-first product sequences and community seeding.',
      Impact: 'Improved recall and watch-through rates.'
    }
  },
  {
    title: 'My Reels — Instagram',
    impact: 'Short-form showcases and editing craft.',
    tabs: {
      Challenge: 'Show breadth quickly.',
      Approach: 'Curated reel set with strong pacing and hooks.',
      Impact: 'View the reel set on Instagram.'
    },
    external: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTY2NzM5MzE3Mjc3NDky?igsh=MXZpY2dsdGYwYmlzdg=='
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <Section id="projects" title="Selected Work">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActive(p)}
            className="group text-left rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            whileHover={{ rotateX: -2, rotateY: 2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="h-32 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-transparent mb-4" />
            <h3 className="font-semibold">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.impact}</p>
            <div className="mt-4 text-sm text-[var(--accent)]">Open</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-black/60"
              onClick={() => setActive(null)}
              aria-label="Close"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative z-[70] mx-auto max-w-3xl mt-24 bg-white dark:bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <button onClick={() => setActive(null)} className="px-3 py-1 rounded-md border border-black/10 dark:border-white/10">ESC</button>
              </div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{active.impact}</p>

              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                {Object.entries(active.tabs).map(([k,v]) => (
                  <div key={k} className="rounded-lg p-4 border border-black/10 dark:border-white/10">
                    <div className="font-medium mb-1">{k}</div>
                    <div className="text-black/70 dark:text-white/70">{v}</div>
                  </div>
                ))}
              </div>

              {active.external && (
                <a
                  href={active.external}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full px-4 py-2 bg-[var(--accent)] text-white"
                >
                  View Reels on Instagram
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
