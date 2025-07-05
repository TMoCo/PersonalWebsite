import { Dispatch, lazy, SetStateAction, Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router-dom'

import { PortfolioProjectPostMeta } from '../data/model/PostMeta'
import PortfolioIndexContent from './portfolio/PortfolioIndex.mdx'

import './portfolio.scss'
import { useTheme } from './Root'

export interface PortfolioContextState {
  meta: PortfolioProjectPostMeta[]
  loading: boolean
  setProjectIndex: Dispatch<SetStateAction<number | undefined>>
  projectIndex?: number
}

function Portfolio() {
  const [meta, setMeta] = useState<PortfolioProjectPostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [projectIndex, setProjectIndex] = useState<number>()

  useEffect(() => {
    const getMeta = async () => {
      const { default: portfolioMeta } = await import('../../public/portfolio-meta.json')
      setMeta(portfolioMeta)
      setLoading(false)
    }
    getMeta()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return <Outlet context={{ meta, loading, projectIndex, setProjectIndex }} />
}

export function usePortfolioContext() {
  return useOutletContext<PortfolioContextState>()
}

export function Project() {
  const { pathname } = useLocation()
  const { meta, projectIndex = meta.findIndex(project => pathname.endsWith(project.slug)) } = usePortfolioContext()

  if (projectIndex === undefined) {
    return <p>Unknown Project, navigate to 404</p>
  }

  const project = meta[projectIndex]
  const ProjectContent = lazy(async () => import(`./portfolio/projects/${project.slug}.mdx`))

  return (
    <Suspense fallback={<p>Loading Post...</p>}>
      <ProjectContent />
      <div className="github-link">
        <a href={`https://github.com/tmoco/${project.repo}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
          {project.repo}
        </a>
      </div>
    </Suspense>
  )
}

export function PortfolioIndex() {
  const { meta } = usePortfolioContext()
  return <PortfolioIndexContent meta={meta} />
}

export default Portfolio
