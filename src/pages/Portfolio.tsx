import React from 'react'
import PorfolioProjectPreview from '../components/PortfolioProjectPreview'
import { useLoaderData } from 'react-router-dom'
import { PortfolioProjectPostMeta } from '../data/model/PostMeta'

const Portfolio = () => {
  // maybe this can be saved in some sort of app state?
  // seems like loaders adds extra complexity which we can avoid with built in react features
  const portfolio = useLoaderData() as PortfolioProjectPostMeta[]
  // const { portfolio } = useLoaderData() as { portfolio: PortfolioProjectPost[] }
  portfolio.sort((a, b) => a.order - b.order)
  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Below is a selection of a few projects I have worked on. Source code for all these and other projects can be
        found on on my GitHub. Enjoy!
      </p>
      <PorfolioProjectPreview projectMeta={portfolio[0]} />
      <PorfolioProjectPreview projectMeta={portfolio[1]} justifyImgRight />
    </>
  )
}

export default Portfolio
