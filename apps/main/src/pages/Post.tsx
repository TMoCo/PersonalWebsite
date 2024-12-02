import React, { lazy, Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MDXContent } from 'mdx/types'

const Post = () => {
  // alias the mdx module
  const module = useLoaderData() as { default: MDXContent }
  const Post = lazy(async () => module)
  return (
    <Suspense fallback={<p>Loading Post</p>}>
      <Post />
    </Suspense>
  )
}

export default Post
