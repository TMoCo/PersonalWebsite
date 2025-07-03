interface PostMeta {
  id: number
  title: string
  route: string
  thumbnail?: string
}

interface PortfolioProjectPostMeta extends PostMeta {
  order: number
  thumbnail: string
  repo?: string
  excerpt?: string
}

export type { PostMeta, PortfolioProjectPostMeta }
