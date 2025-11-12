import React from 'react'
import Section from './Section'
import { Chip, ProgressBar } from './Chips'

export default function About() {
  return (
    <Section id="about" title="About the Work" subtitle="I’m Mohamed ElSaadawey — a Digital Communications & Marketing Specialist. I merge creative storytelling, analytics, and AI to deliver measurable impact.">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex flex-wrap -m-1">
            {[
              'Social Media Strategy',
              'Storytelling & Copywriting',
              'AI-Driven SEO',
              'Analytics & Data Visualization',
              'Marketing Automation',
              'Video Editing & Design',
            ].map((s) => (
              <div key={s} className="m-1"><Chip>{s}</Chip></div>
            ))}
          </div>

          <div className="mt-8">
            <ProgressBar label="Arabic" value={100} />
            <ProgressBar label="English" value={95} />
            <ProgressBar label="French" value={50} />
            <ProgressBar label="Spanish" value={30} />
          </div>

          <div className="mt-10 text-sm text-black/70 dark:text-white/70">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mb-4" />
            <div className="font-medium">Idea → Strategy → Creative → Impact</div>
            <p className="mt-2">A thin red routing line animates as you scroll, signaling momentum from concept to measurable outcomes.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-br from-[var(--accent)]/15 to-transparent" />
          <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
            <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,51,0.2),transparent_60%)]" />
          </div>
        </div>
      </div>
    </Section>
  )
}
