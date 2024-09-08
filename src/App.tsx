import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'
import Portfolio from './pages/Portfolio'
import PortfolioProject from './pages/PortfolioProject'

import portfolioLoader from './data/loaders/portfolioLoader'

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
          loader: portfolioLoader,
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
  return <RouterProvider router={router} />
}

export default App
