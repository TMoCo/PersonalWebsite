import { PortfolioProjectPostMeta } from '../model/PostMeta'

// mimic fetching data from a remote, this could be some server side loaded mdx, or even a serverless solution like
// an AWS lambda that compiles and sends MDX from an S3 bucket, or even directly accessing compiled mdx from S3
export default async () => {
  const posts = import.meta.glob<{
    meta: PortfolioProjectPostMeta // yaml front matter
  }>('../../pages/portfolio/*.mdx')

  return Promise.all(Object.keys(posts).map(post => posts[post]().then(({ meta }) => meta)))
}
