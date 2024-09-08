import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioProjectPost } from '../../data/model/Post'

interface PreviewItemProps {
  project: PortfolioProjectPost
  justifyImgRight?: boolean
}

const PortfolioProjectPreview = ({ project, justifyImgRight = false }: PreviewItemProps) => {
  const {
    meta: { thumbnail, route, title, excerpt }
  } = project
  return (
    <div className={`preview-item ${justifyImgRight ? 'rtl' : ''}`}>
      <img src={thumbnail} className="thumbnail"></img>
      <div className="info">
        <h2 className="title">
          <Link className="link" to={`/portfolio${route}`}>
            {title}
          </Link>
        </h2>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default memo(PortfolioProjectPreview)
