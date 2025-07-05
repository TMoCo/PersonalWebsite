import { Dispatch, lazy, SetStateAction, Suspense, useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

import { PortfolioProjectPostMeta } from '../data/model/PostMeta'
import PortfolioIndexContent from './portfolio/PortfolioIndex.mdx'

export interface PortfolioContextState {
  meta: PortfolioProjectPostMeta[]
  loading: boolean
  setProject: Dispatch<SetStateAction<string | undefined>>
  project?: string
}

function Portfolio() {
  const [meta, setMeta] = useState<PortfolioProjectPostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState<string>()

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

  return <Outlet context={{ meta, loading, project, setProject }} />
}

export function usePortfolioContext() {
  return useOutletContext<PortfolioContextState>()
}

export function Project() {
  const { project } = usePortfolioContext()
  if (!project) {
    return <p>Unknown Project, navigate to 404</p>
  }
  const Project = lazy(async () => import(`./portfolio/posts/${project}.mdx`))
  return (
    <Suspense fallback={<p>Loading Post...</p>}>
      <Project />
    </Suspense>
  )
}

export function PortfolioIndex() {
  const { meta } = usePortfolioContext()
  return <PortfolioIndexContent meta={meta} />
}

export default Portfolio
