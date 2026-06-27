import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useSearch } from '../contexts/SearchContext'

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

export default function NavBar() {
  const { theme, setTheme } = useTheme()
  const { setIsOpen } = useSearch()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 dark:bg-black/60 backdrop-blur z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">Rajat Mahajan</Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4">
            <Link to="/" className="hover:underline">About</Link>
            <Link to="/experience" className="hover:underline">Experience</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
          </nav>

          <button
            aria-label="Open command palette"
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <Search size={16} />
            <span>Cmd+K</span>
          </button>

          <button
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <a className="btn-primary hidden sm:inline-block" href="https://github.com/rajatmahajan23" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </header>
  )
}
