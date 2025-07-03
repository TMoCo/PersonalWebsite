import { PortfolioProjectPostMeta, PostMeta } from './PostMeta'

interface Post {
  meta: PostMeta
  content: JSX.Element
}

interface PortfolioProjectPost extends Post {
  meta: PortfolioProjectPostMeta
  repoUrl?: string
}

export type { PortfolioProjectPost, Post }
