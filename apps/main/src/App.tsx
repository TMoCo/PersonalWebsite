import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage.mdx'
import About from './pages/About.mdx'
import Portfolio from './pages/portfolio/Portfolio.mdx'
import Post from './pages/Post'

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
        element: <Portfolio />
      },
      {
        path: '/portfolio/:project',
        element: <Post />
      }
    ]
  }
])

const App = () => <RouterProvider fallbackElement={<ErrorPage />} router={router} />

export default App
