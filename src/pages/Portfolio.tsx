import React from 'react'
import PorfolioProjectPreview from '../components/PortfolioProjectPreview'
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import { PortfolioProjectPostMeta } from '../data/model/PostMeta'

const Portfolio = () => {
  const portfolio = useLoaderData() as PortfolioProjectPostMeta[]
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
      <Banner>I also make games!</Banner>
      <PorfolioProjectPreview projectMeta={portfolio[2]} />
      <PorfolioProjectPreview projectMeta={portfolio[3]} justifyImgRight />
    </>
  )
}

export default Portfolio
