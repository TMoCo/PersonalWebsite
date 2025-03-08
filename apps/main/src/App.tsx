import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'
import Portfolio from './pages/portfolio'
import Post from './pages/Post'

import portfolioMetaLoader from './data/loaders/portfolioMetaLoader'

const router = createBrowserRouter([
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
        path: 'portfolio/:project',
        loader: ({ params: { project } }) => import(`./pages/portfolio/posts/${project}.mdx`),
        element: <Post />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
