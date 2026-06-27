import React from 'react'
import { Code, Cloud, Database, Zap, TestTube, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++']
  },
  {
    title: 'Backend',
    icon: Code,
    skills: ['Spring Boot', 'Node.js', 'FastAPI', 'REST APIs', 'GraphQL', 'Kafka', 'gRPC']
  },
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'Next.js', 'Redux', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'EC2', 'Lambda', 'S3', 'ECS', 'EKS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB']
  },
  {
    title: 'Observability',
    icon: Zap,
    skills: ['Grafana', 'Prometheus', 'CloudWatch', 'OpenTelemetry', 'DataDog']
  },
  {
    title: 'Testing',
    icon: TestTube,
    skills: ['JUnit', 'Mockito', 'PyTest', 'Jest', 'Cypress', 'Selenium']
  },
  {
    title: 'AI & ML',
    icon: Brain,
    skills: ['RAG', 'LangChain', 'Amazon Bedrock', 'OpenAI APIs', 'Vector Databases', 'Prompt Engineering', 'LLM Agents']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className="bg-white/60 dark:bg-gray-800/50 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={20} className="text-primary" />
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 grid md:grid-cols-4 gap-6">
        {[
          { label: '3+', desc: 'Years Experience' },
          { label: '50+', desc: 'REST APIs' },
          { label: '10+', desc: 'Production Systems' },
          { label: 'Millions', desc: 'Records Processed' }
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-primary">{stat.label}</div>
            <div className="text-gray-600 dark:text-gray-400">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
