import React from 'react'
import Section from './Section'

const quotes = [
  {
    quote: 'Clear strategy, fast delivery, and results we could present to leadership.',
    by: 'Government program, Cairo'
  },
  {
    quote: 'Understood our audience and shipped creative that worked in the wild.',
    by: 'Consumer brand, Riyadh'
  },
  {
    quote: 'Smart iteration loop—measurable improvements month over month.',
    by: 'Startup, Dubai'
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Trusted in the field">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <div key={i} className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <div className="text-lg">“{q.quote}”</div>
            <div className="mt-4 text-sm text-black/70 dark:text-white/70">{q.by}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
