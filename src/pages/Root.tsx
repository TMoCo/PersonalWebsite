import React, { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import RootHeader from '../components/RootHeader'
import { BlogContext, BlogDispatchContext } from '../contexts/BlogContext'
import { blogInitialiser, blogReducer } from '../data/reducer'

import '../core.scss'

interface RootProps {
  routes?: string[]
}

const Root = ({ routes }: RootProps) => {
  const [blog, dispatch] = useReducer(blogReducer, {}, blogInitialiser)
  return (
    <BlogContext.Provider value={blog}>
      <BlogDispatchContext.Provider value={dispatch}>
        <RootHeader routes={routes} />
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </BlogDispatchContext.Provider>
    </BlogContext.Provider>
  )
}

export default Root
