import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Root from './pages/Root'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Test from './pages/portfolio/2DParticleSim.mdx'

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
        path: '/test',
        element: <Test />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
