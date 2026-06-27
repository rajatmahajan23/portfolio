import React from 'react'
import { Github, Star, GitFork, Clock } from 'lucide-react'
import { useGitHubRepos } from '../hooks/useGitHub'

export default function GitHubSection() {
  const { data: repos, isLoading, error } = useGitHubRepos()

  if (isLoading) {
    return (
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Github size={28} /> Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-300 dark:bg-gray-700 h-48 rounded-lg" />
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Github size={28} /> Recent Projects
        </h2>
        <div className="text-gray-500">Unable to load repositories</div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Github size={28} /> Recent Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos?.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white/60 dark:bg-gray-800/50 rounded-lg p-6 shadow hover:shadow-lg transition group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg group-hover:text-primary transition truncate">
                {repo.name}
              </h3>
              <Github size={18} className="text-gray-400 flex-shrink-0" />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {repo.description || 'No description'}
            </p>

            <div className="flex items-center flex-wrap gap-3 text-xs text-gray-500">
              {repo.language && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  {repo.language}
                </span>
              )}

              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1">
                  <Star size={14} /> {repo.stargazers_count}
                </span>
              )}

              {repo.forks_count > 0 && (
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {repo.forks_count}
                </span>
              )}

              {repo.updated_at && (
                <span className="flex items-center gap-1 ml-auto">
                  <Clock size={14} />
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/rajatmahajan23?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          View All Repositories
        </a>
      </div>
    </section>
  )
}
