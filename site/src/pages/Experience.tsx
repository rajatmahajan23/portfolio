import React from 'react'
import { Briefcase, Award, TrendingUp, Code } from 'lucide-react'

interface ExperienceItem {
  role: string
  org: string
  date: string
  description: string
  highlights: string[]
  metrics: { label: string; value: string }[]
  technologies: string[]
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="bg-white/60 dark:bg-gray-800/50 rounded-lg p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{item.role}</h3>
          <p className="text-gray-600 dark:text-gray-400">{item.org}</p>
        </div>
        <span className="text-sm text-primary font-semibold">{item.date}</span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold flex items-center gap-2 mb-2">
          <Award size={16} /> Key Highlights
        </h4>
        <ul className="space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
              <span className="text-primary">▸</span> {h}
            </li>
          ))}
        </ul>
      </div>

      {item.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
          {item.metrics.map((m, i) => (
            <div key={i} className="text-sm">
              <div className="font-semibold text-primary flex items-center gap-1">
                <TrendingUp size={14} /> {m.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Graduate Services Assistant',
      org: 'AAIR Lab, Arizona State University',
      date: 'Jul 2024 - Sep 2024',
      description: 'Optimized an AI planning tool used by researchers. Focused on improving performance through asynchronous programming and real-time communication.',
      highlights: [
        'Reduced execution time by 20% using async JavaScript and API call streamlining',
        'Cut response times by 30% with Flask backend + WebSockets integration',
        'Reduced environment setup time by 50% with Docker containerization'
      ],
      metrics: [
        { label: 'Execution Time Reduction', value: '20%' },
        { label: 'Response Time Improvement', value: '30%' },
        { label: 'Setup Time Saved', value: '50%' }
      ],
      technologies: ['Flask', 'WebSockets', 'Docker', 'JavaScript', 'Python']
    },
    {
      role: 'Software Engineer',
      org: 'Cognizant Technology Solutions, India',
      date: 'Aug 2021 - Jul 2023',
      description: 'Developed production microservices for banking clients, focusing on scalability, reliability, and quality. Led technical implementation across multiple services.',
      highlights: [
        'Engineered 15+ Spring Boot microservices supporting financial transactions',
        'Achieved 100% test coverage with 250+ unit tests using JUnit and Mockito',
        'Reduced production incidents by 40% through comprehensive testing',
        'Optimized AWS infrastructure (EC2, S3, RDS, Lambda), reducing costs by 30%',
        'Eliminated 150+ code issues using SonarQube automation',
        'Accelerated project delivery by 50% with CI/CD pipeline optimization'
      ],
      metrics: [
        { label: 'Microservices Built', value: '15+' },
        { label: 'Test Coverage', value: '100%' },
        { label: 'Incidents Reduced', value: '40%' },
        { label: 'Cost Savings', value: '30%' }
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'AWS', 'Kafka', 'JUnit', 'SonarQube', 'Jenkins', 'GitHub']
    }
  ]

  return (
    <div className="space-y-8 py-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Professional Experience</h1>
        <p className="text-gray-600 dark:text-gray-400">Building scalable systems and solving real-world problems</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} item={exp} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <Code size={20} /> Core Competencies
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Microservices Architecture, RESTful APIs, Event-Driven Systems, Cloud-Native Development,
          Distributed Systems, Fault Tolerance, Scalability, CI/CD, Test-Driven Development (TDD),
          System Design, Performance Optimization, Database Design, API Gateway Patterns
        </p>
      </div>
    </div>
  )
}
