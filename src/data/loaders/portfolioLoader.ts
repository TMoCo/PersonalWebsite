import { PortfolioPost, PostMeta } from '../model/post'

const pages = import.meta.glob<
  {
    default: JSX.Element
  } & PostMeta
>('../../pages/portfolio/*.mdx')

export default async () => {
  const portfolio = await Promise.all(Object.keys(pages).map(page => pages[page]())).then(posts => {
    return posts.map((post): PortfolioPost => {
      console.log(post)
      return {
        meta: { title: post.title, previewImgUri: post.previewImgUri, route: post.route, repo: post.repo },
        content: post.default
      }
    })
  })
  return { portfolio }
}
