import React, { useReducer } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'
import Portfolio from './pages/Portfolio'
import PortfolioProject from './pages/PortfolioProject'

import portfolioMetaLoader from './data/loaders/portfolioMetaLoader'
import { blogInitialiser, blogReducer } from './data/reducer'
import { BlogContext, BlogDispatchContext } from './contexts/BlogContext'

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <Root routes={['about', 'portfolio']} />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'portfolio',
          loader: portfolioMetaLoader,
          element: <Portfolio />
        },
        {
          path: 'portfolio/:postId',
          element: <PortfolioProject />
        }
      ]
    }
  ],
  import.meta.env.PROD
    ? {
        // TODO: remove when replacing old Jekyll app
        basename: '/PersonalWebsite'
      }
    : {}
)

const App = () => {
  const [blog, dispatch] = useReducer(blogReducer, {}, blogInitialiser)
  return (
    <BlogContext.Provider value={blog}>
      <BlogDispatchContext.Provider value={dispatch}>
        <RouterProvider router={router} />
      </BlogDispatchContext.Provider>
    </BlogContext.Provider>
  )
}

export default App
