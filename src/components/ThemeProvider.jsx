import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({ theme: 'system', resolved: 'light', toggle: () => {} })

export function ThemeProvider({ children }) {
  const getPref = () => (
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [theme, setTheme] = useState('system')
  const resolved = theme === 'system' ? (getPref() ? 'dark' : 'light') : theme

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', resolved === 'dark' ? '#FF0033' : '#A30000')
    root.style.setProperty('--accent-2', resolved === 'dark' ? '#8B0000' : '#C63E3E')
    if (resolved === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [resolved])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (theme === 'system') {
        const root = document.documentElement
        if (mq.matches) root.classList.add('dark')
        else root.classList.remove('dark')
      }
    }
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [theme])

  const value = useMemo(
    () => ({ theme, resolved, setTheme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : t === 'light' ? 'system' : 'dark')) }),
    [theme, resolved]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
