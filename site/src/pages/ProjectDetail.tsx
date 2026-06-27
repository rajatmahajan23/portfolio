import React from 'react'
import { useParams } from 'react-router-dom'

const projectData: any = {
  'fees-assistant': {
    title: 'Fees Assistant',
    overview: 'RAG-based documentation assistant using AWS Bedrock and Kendra.',
    problem: 'Developers spend 15–30 minutes searching docs for integration details.',
    architecture: ['AWS Kendra', 'Bedrock', 'Lambda', 'S3', 'RAG'],
    results: ['1600+ documents indexed', 'Lookup time reduced from 15–30m to <1m']
  }
}

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projectData[id as string]
  if(!project) return <div>Project not found</div>

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <h2 className="mt-4 font-semibold">Overview</h2>
      <p className="mt-2">{project.overview}</p>

      <h3 className="mt-4 font-semibold">Problem</h3>
      <p>{project.problem}</p>

      <h3 className="mt-4 font-semibold">Architecture</h3>
      <ul className="list-disc ml-5">
        {project.architecture.map((a: string) => <li key={a}>{a}</li>)}
      </ul>

      <h3 className="mt-4 font-semibold">Results</h3>
      <ul className="list-disc ml-5">
        {project.results.map((r: string) => <li key={r}>{r}</li>)}
      </ul>
    </section>
  )
}
