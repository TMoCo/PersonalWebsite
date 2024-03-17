import { PortfolioPost, PostMeta } from '../model/post'

const pages = import.meta.glob<{
  default: JSX.Element
  meta: PostMeta
}>('../../pages/portfolio/*.mdx')

export default async () => {
  const portfolio = await Promise.all(Object.keys(pages).map(page => pages[page]())).then(posts => {
    return posts.map(post => {
      console.log(post)
      const { meta } = post
      return {
        meta,
        content: post.default
      }
    })
  })
  return { portfolio }
}
