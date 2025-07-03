import { useLoaderData } from 'react-router'
import PortfolioContent from './portfolio/Portfolio.mdx'
import { PortfolioProjectPostMeta } from '../data/model/PostMeta'

const Portfolio = () => {
  const portfolio = useLoaderData() as PortfolioProjectPostMeta[]
  portfolio.sort((a, b) => a.order - b.order)
  return <PortfolioContent portfolio={portfolio} />
}

export default Portfolio
