import React, { useState } from 'react'
import Section from './Section'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'moe.allaa.93@gmail.com'

  const copy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <Section id="contact" title="Let’s build something bold.">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href={`mailto:${email}`} className="inline-flex rounded-full px-5 py-3 bg-[var(--accent)] text-white">Get in Touch</a>
        <button onClick={copy} className="inline-flex rounded-full px-5 py-3 border border-black/10 dark:border-white/10">{copied ? 'Copied!' : 'Copy email'}</button>
      </div>
      <div className="mt-6 text-sm text-black/70 dark:text-white/70">Contacts • Support • Socials • Legal</div>
    </Section>
  )
}
