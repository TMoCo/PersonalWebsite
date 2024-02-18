import React, { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

import '../style/root.scss'

import { BlogContext, BlogDispatchContext } from '../contexts/BlogContext'

import { blogInitialiser, blogReducer } from '../data/reducer'

interface RootProps {
  routes?: string[]
}

const Root = ({ routes }: RootProps) => {
  const [blog, dispatch] = useReducer(blogReducer, {}, blogInitialiser)
  return (
    <BlogContext.Provider value={blog}>
      <BlogDispatchContext.Provider value={dispatch}>
        <header>
          <NavBar routes={routes} />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </BlogDispatchContext.Provider>
    </BlogContext.Provider>
  )
}

export default Root
