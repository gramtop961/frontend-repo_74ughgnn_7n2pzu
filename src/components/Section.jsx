import React from 'react'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12">
            <h2 className="font-['Space Grotesk',_Inter,_sans-serif] text-3xl sm:text-5xl tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-3xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
