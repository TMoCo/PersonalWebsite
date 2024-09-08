import React from 'react'
import PreviewItem from '../components/PreviewItem'
import { useLoaderData } from 'react-router-dom'
import { PortfolioProjectPost } from '../data/model/Post'

const Portfolio = () => {
  const { portfolio } = useLoaderData() as { portfolio: PortfolioProjectPost[] }
  portfolio.sort((a, b) => a.meta.order - b.meta.order)
  console.log(portfolio)
  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Below is a selection of a few projects I have worked on. Source code for all these and other projects can be
        found on on my GitHub. Enjoy!
      </p>
      <PreviewItem imgUri={portfolio[0].meta.thumbnail} title={portfolio[0].meta.title} route={portfolio[0].meta.route}>
        {portfolio[0].meta.excerpt}
      </PreviewItem>
      <PreviewItem imgUri={portfolio[1].meta.thumbnail} title={portfolio[1].meta.title} route={portfolio[1].meta.route}>
        {portfolio[1].meta.excerpt}
      </PreviewItem>
    </>
  )
}

export default Portfolio
