import { useEffect, useState } from 'react'
import PortfolioContent from './portfolio/Portfolio.mdx'
import { PortfolioProjectPostMeta } from '../data/model/PostMeta'

const Portfolio = () => {
  const [meta, setMeta] = useState<PortfolioProjectPostMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMeta = async () => {
      const { default: portfolioMeta } = await import('../../public/portfolio-meta.json')
      setMeta(portfolioMeta.sort((a, b) => a.order - b.order))
      setLoading(false)
    }
    getMeta()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return <PortfolioContent meta={meta} />
}

export default Portfolio
