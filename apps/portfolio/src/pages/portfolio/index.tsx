import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { PortfolioProjectPostMeta } from '../../data/model/PostMeta'
import PortfolioLayout from './portfolio.mdx'

const Portfolio = () => {
  const portfolio = useLoaderData() as PortfolioProjectPostMeta[]
  portfolio.sort((a, b) => a.order - b.order)
  return <PortfolioLayout portfolio={portfolio} />
}

export default Portfolio
