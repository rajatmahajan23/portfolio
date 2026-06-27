import { useQuery } from '@tanstack/react-query'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ['github-repos'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/users/rajatmahajan23/repos?sort=stars&per_page=6'
      )
      if (!response.ok) throw new Error('Failed to fetch repos')
      const repos = await response.json()
      return repos as GitHubRepo[]
    },
    staleTime: 1000 * 60 * 60 // 1 hour
  })
}
