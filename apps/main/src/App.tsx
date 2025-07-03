import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'
import Portfolio from './pages/Portfolio'
import Post from './pages/Post'

const router = createBrowserRouter([
  {
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
        loader: () => fetch('./pages/portfolio/posts/posts-meta.json'),
        element: <Portfolio />
      },
      {
        path: '/portfolio/:project',
        element: <Post />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
