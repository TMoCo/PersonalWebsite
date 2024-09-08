import React, { PropsWithChildren, memo } from 'react'
import { Link } from 'react-router-dom'

interface PreviewItemProps {
  imgUri: string
  title: string
  route: string
  justifyImgRight?: boolean
}

const PreviewItem = ({
  imgUri,
  title,
  route,
  justifyImgRight = false,
  children: description
}: PropsWithChildren<PreviewItemProps>) => {
  return (
    <div className={`preview-item ${justifyImgRight ? 'rtl' : ''}`}>
      <img src={imgUri} className="thumbnail"></img>
      <div className="info">
        <h2 className="title">
          <Link className="link" to={route}>
            {title}
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default memo(PreviewItem)
