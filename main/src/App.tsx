import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Root from './pages/Root'
import HomePage from './pages/HomePage.mdx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.mdx'
import Portfolio, { PortfolioIndex, Project } from './pages/portfolio'

import './core.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<ErrorPage />} element={<Root routes={['about', 'portfolio']} />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />}>
            <Route index element={<PortfolioIndex />} />
            <Route path=":project" element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
