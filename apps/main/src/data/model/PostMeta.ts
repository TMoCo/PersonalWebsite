interface PostMeta {
  id: number
  title: string
  slug: string
  thumbnail?: string
}

interface PortfolioProjectPostMeta extends PostMeta {
  order: number
  thumbnail: string
  repo?: string
  excerpt?: string
}

export type { PostMeta, PortfolioProjectPostMeta }
