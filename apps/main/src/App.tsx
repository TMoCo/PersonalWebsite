import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage.mdx'
import About from './pages/About.mdx'

const Portfolio = lazy(async () => import('portfolio/app'))

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
      ...['portfolio', '/portfolio/:project'].map(path => ({
        path,
        element: (
          <Suspense fallback="loading...">
            <Portfolio />
          </Suspense>
        )
      }))
    ]
  }
])

const App = () => <RouterProvider fallbackElement={<ErrorPage />} router={router} />

export default App
