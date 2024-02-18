interface PostMeta {
  title: string
  previewImgUri?: string
  route: string
  repo?: string
}

interface Post {
  meta: PostMeta
  content: JSX.Element
}

interface PortfolioPost extends Post {
  repoUrl?: string
}

export type { PortfolioPost, PostMeta }
