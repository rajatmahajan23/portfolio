import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import ProjectDetail from './pages/ProjectDetail'
import CommandPalette from './components/CommandPalette'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      <NavBar />
      <CommandPalette />
      <main className="pt-20 max-w-6xl mx-auto px-4 flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
