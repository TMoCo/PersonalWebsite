import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { usePortfolioContext } from '../../pages/Portfolio'

interface PreviewItemProps {
  justifyImgRight?: boolean
  index: number
}

const PortfolioProjectPreview = ({ index, justifyImgRight = false }: PreviewItemProps) => {
  const { setProject, meta } = usePortfolioContext()
  const { thumbnail, slug, title, excerpt } = meta[index]
  return (
    <div className={`preview-item ${justifyImgRight ? 'rtl' : ''}`}>
      <img src={thumbnail} className="thumbnail"></img>
      <div className="info">
        <h2 className="title">
          <Link className="link" to={`/portfolio/${slug}`} onClick={() => setProject(index)}>
            {title}
          </Link>
        </h2>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default memo(PortfolioProjectPreview)
