import React from 'react'

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-sm mr-2 mb-2 bg-white/60 dark:bg-white/5">
      {children}
    </span>
  )
}

export function ProgressBar({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1 text-sm">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <div className="h-full bg-[var(--accent)]" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
