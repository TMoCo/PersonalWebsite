interface PostMeta {
  id: number
  title: string
  route: string
  thumbnail?: string
}

interface PortfolioProjectPostMeta extends PostMeta {
  order: number
  repo?: string
  excerpt?: string
}

export type { PostMeta, PortfolioProjectPostMeta }
