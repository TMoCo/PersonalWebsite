import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/Home.mdx'

import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'

import Portfolio from './pages/Portfolio'
import PostPage from './pages/Post'

import portfolioLoader from './data/loaders/portfolioLoader'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root routes={['about', 'portfolio']} />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        loader: portfolioLoader,
        element: <Portfolio />
      },
      {
        path: '/portfolio/:postId',
        element: <PostPage />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
