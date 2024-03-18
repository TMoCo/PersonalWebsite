import { Post } from '../model/Post'
import { PostMeta } from '../model/PostMeta'

// mimic fetching data from a remote, this could be some server side loaded mdx, or even a serverless solution like
// an AWS lambda that compiles and sends MDX from an S3 bucket, or even directly accessing compiled mdx from S3
const pages = import.meta.glob<{
  // vite glob import
  default: JSX.Element // mdx content exported as default
  meta: PostMeta // yaml front matter
}>('../../pages/portfolio/*.mdx')

export default async () => {
  const portfolio = await Promise.all(Object.keys(pages).map(page => pages[page]())).then(posts => {
    return posts.map<Post>(post => {
      const { meta } = post
      return {
        meta,
        content: post.default
      }
    })
  })
  return { portfolio }
}
