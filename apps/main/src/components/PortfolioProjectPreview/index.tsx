import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioProjectPostMeta } from '../../data/model/PostMeta'

interface PreviewItemProps {
  projectMeta: PortfolioProjectPostMeta
  justifyImgRight?: boolean
}

const PortfolioProjectPreview = ({
  projectMeta: { thumbnail, slug, title, excerpt },
  justifyImgRight = false
}: PreviewItemProps) => {
  return (
    <div className={`preview-item ${justifyImgRight ? 'rtl' : ''}`}>
      <img src={thumbnail} className="thumbnail"></img>
      <div className="info">
        <h2 className="title">
          <Link className="link" to={`/portfolio/${slug}`}>
            {title}
          </Link>
        </h2>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default memo(PortfolioProjectPreview)
