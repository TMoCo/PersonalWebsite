import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  // alias the mdx module
  const { project } = useParams()
  const Post = lazy(async () => import(`./portfolio/posts/${project}.mdx`))
  return (
    <Suspense fallback={<p>Loading Post</p>}>
      <Post />
    </Suspense>
  )
}

export default Post
