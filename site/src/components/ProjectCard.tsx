import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }: any){
  return (
    <div className="rounded-lg p-6 bg-white/60 dark:bg-gray-800/50 shadow">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{project.summary}</p>
      <div className="flex gap-2 mt-4">
        <Link to={`/projects/${project.id}`} className="text-primary">Case study</Link>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500">Source</a>
      </div>
    </div>
  )
}
