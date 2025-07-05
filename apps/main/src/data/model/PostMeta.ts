interface PostMeta {
  id: string
  title: string
  slug: string
  thumbnail?: string
}

interface PortfolioProjectPostMeta extends PostMeta {
  thumbnail: string
  repo?: string
  excerpt?: string
}

export type { PostMeta, PortfolioProjectPostMeta }
