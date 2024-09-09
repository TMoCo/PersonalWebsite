import React from 'react'
import PorfolioProjectPreview from '../components/PortfolioProjectPreview'
import { useLoaderData } from 'react-router-dom'
import { PortfolioProjectPost } from '../data/model/Post'

const Portfolio = () => {
  // maybe this can be saved in some sort of app state?
  // seems like loaders adds extra complexity which we can avoid with built in react features
  const portfolio = useLoaderData() as PortfolioProjectPost[]
  // const { portfolio } = useLoaderData() as { portfolio: PortfolioProjectPost[] }
  console.log(portfolio)
  portfolio.sort((a, b) => a.meta.order - b.meta.order)
  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Below is a selection of a few projects I have worked on. Source code for all these and other projects can be
        found on on my GitHub. Enjoy!
      </p>
      <PorfolioProjectPreview project={portfolio[0]} />
      <PorfolioProjectPreview project={portfolio[1]} justifyImgRight />
    </>
  )
}

export default Portfolio
