import React from 'react'

import Hero from '../components/Hero'
import Skills from '../components/Skills'
import GitHubSection from '../components/GitHubSection'

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <Hero />

      <section className="bg-white/60 dark:bg-gray-800/50 rounded-xl p-8 shadow">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          I'm a backend-focused software engineer specializing in building scalable distributed systems,
          cloud-native applications, and AI-powered developer tools. With experience at Cognizant and
          graduate studies at Arizona State University, I've contributed to production systems serving
          millions of users. My focus is on clean code, measurable impact, and solving real engineering challenges.
        </p>
      </section>

      <Skills />

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 bg-white/60 dark:bg-gray-800/50 shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Work</h3>
          <ul className="space-y-3 text-sm">
            <li>✦ AI Planner Dashboard — Flask, WebSockets, Docker</li>
            <li>✦ Banking Microservices — Spring Boot, Java, AWS</li>
            <li>✦ Data Visualization — Python, Plotly, React</li>
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-white/60 dark:bg-gray-800/50 shadow">
          <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
          <ul className="space-y-3 text-sm">
            <li>✦ Kubernetes orchestration patterns</li>
            <li>✦ LLM agents and RAG systems</li>
            <li>✦ Distributed database systems</li>
          </ul>
        </div>
      </section>

      <GitHubSection />
    </div>
  )
}
