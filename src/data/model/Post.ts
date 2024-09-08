import { PostMeta } from './PostMeta'

interface Post {
  meta: PostMeta
  content: JSX.Element
}

interface PortfolioProjectPost extends Post {
  repoUrl?: string
}

export type { PortfolioProjectPost, Post }
