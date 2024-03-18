import { PostMeta } from './PostMeta'

interface Post {
  meta: PostMeta
  content: JSX.Element
}

interface PortfolioPost extends Post {
  repoUrl?: string
}

export type { PortfolioPost, Post }
