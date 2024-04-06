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
  const PreviewInfo = [
    <img key="preview-img" src={imgUri} className={`preview-img`}></img>,
    <div key="preview-description" className="preview-info">
      <Link className="preview-link" to={route}>
        <h2 className="preview-title">{title}</h2>
      </Link>
      {description}
    </div>
  ]
  return <div className="preview-item">{justifyImgRight ? PreviewInfo : PreviewInfo.reverse()}</div>
}

export default memo(PreviewItem)
