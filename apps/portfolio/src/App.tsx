import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage'
import Portfolio from './pages/portfolio'
import Post from './pages/Post'

import portfolioMetaLoader from './data/loaders/portfolioMetaLoader'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    // element: <Root routes={['about', 'portfolio']} />,
    children: [
      {
        path: '/portfolio',
        loader: portfolioMetaLoader,
        element: <Portfolio />
      },
      {
        path: '/portfolio/:project',
        loader: ({ params: { project } }) => import(`./pages/portfolio/posts/${project}.mdx`),
        element: <Post />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
