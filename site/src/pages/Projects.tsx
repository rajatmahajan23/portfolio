import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 'fees-assistant',
    title: 'Fees Assistant (RAG + Bedrock)',
    summary: 'Personal project: RAG search over documentation using AWS Bedrock and Kendra. Reduced lookup time from 15–30 mins to under 1 min.',
    github: 'https://github.com/rajatmahajan23/portfolio'
  },
  {
    id: 'ai-incident-triage',
    title: 'AI Incident Triage',
    summary: 'Serverless pipeline for incident summarization and triage using Lambda and CloudWatch.',
    github: '#'
  }
]

export default function Projects(){
  return (
    <section className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">Featured Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
