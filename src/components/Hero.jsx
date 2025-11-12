import React, { useEffect, useMemo, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Camera push-in effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section id="top" ref={containerRef} className="relative h-[120vh] flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 dark:from-black/50 dark:via-black/20 dark:to-black/90 pointer-events-none" />
      <motion.div style={{ scale, opacity, y }} className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-28">
          <div className="max-w-3xl">
            <h1 className="font-['Space Grotesk',_Inter,_sans-serif] text-5xl sm:text-7xl tracking-tight leading-[0.95] text-white">
              Futuristic Digital Storytelling
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
              Blending creativity, strategy, and AI to build human-centered impact.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-[var(--accent)] text-white font-medium shadow-[0_0_0_0_rgba(255,0,51,0.6)] hover:shadow-[0_0_0_8px_rgba(255,0,51,0.15)] transition-all">
                See Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
