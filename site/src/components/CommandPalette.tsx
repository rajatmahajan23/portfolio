import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Code, Briefcase, BookOpen, ExternalLink } from 'lucide-react'
import { useSearch } from '../contexts/SearchContext'

type CommandItem = {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  action: () => void
  group: 'navigation' | 'actions' | 'links'
}

export default function CommandPalette() {
  const navigate = useNavigate()
  const { isOpen, setIsOpen, searchQuery, setSearchQuery } = useSearch()
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      description: 'Go to home page',
      icon: <Code size={16} />,
      action: () => {
        navigate('/')
        setIsOpen(false)
      },
      group: 'navigation'
    },
    {
      id: 'experience',
      label: 'Experience',
      description: 'View work experience',
      icon: <Briefcase size={16} />,
      action: () => {
        navigate('/experience')
        setIsOpen(false)
      },
      group: 'navigation'
    },
    {
      id: 'projects',
      label: 'Projects',
      description: 'Browse portfolio projects',
      icon: <Code size={16} />,
      action: () => {
        navigate('/projects')
        setIsOpen(false)
      },
      group: 'navigation'
    },
    {
      id: 'github',
      label: 'GitHub',
      description: 'Open GitHub profile',
      icon: <ExternalLink size={16} />,
      action: () => {
        window.open('https://github.com/rajatmahajan23', '_blank')
        setIsOpen(false)
      },
      group: 'links'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      description: 'Open LinkedIn profile',
      icon: <ExternalLink size={16} />,
      action: () => {
        window.open('https://www.linkedin.com/in/rajat-mahajan23/', '_blank')
        setIsOpen(false)
      },
      group: 'links'
    },
    {
      id: 'resume',
      label: 'Resume',
      description: 'Download resume',
      icon: <BookOpen size={16} />,
      action: () => {
        window.location.href = '/resume.pdf'
        setIsOpen(false)
      },
      group: 'actions'
    }
  ]

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
        setSearchQuery('')
        setSelected(0)
      }
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelected(Math.min(selected + 1, filtered.length - 1))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelected(Math.max(selected - 1, 0))
          break
        case 'Enter':
          e.preventDefault()
          if (filtered[selected]) filtered[selected].action()
          break
        case 'Escape':
          setIsOpen(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selected, filtered, setIsOpen, setSearchQuery])

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="w-full max-w-lg rounded-lg shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
          <Search size={18} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands..."
            className="flex-1 bg-transparent outline-none text-sm"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setSelected(0)
            }}
          />
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <X size={16} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No commands found</div>
          ) : (
            <div className="p-2">
              {filtered.map((cmd, idx) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                    selected === idx
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="flex-shrink-0">{cmd.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{cmd.label}</div>
                    <div className={`text-xs ${selected === idx ? 'text-white/70' : 'text-gray-400'}`}>
                      {cmd.description}
                    </div>
                  </div>
                  <kbd className={`text-xs px-2 py-1 rounded border ${
                    selected === idx
                      ? 'border-white/30'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {idx === 0 ? '↵' : ''}
                  </kbd>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500 flex justify-between">
          <div>⌘K to open</div>
          <div>↑↓ navigate · ↵ select · ⎋ close</div>
        </div>
      </div>
    </div>
  )
}
