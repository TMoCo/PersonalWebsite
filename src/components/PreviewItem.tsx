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
      <h2 className="preview-title">
        <Link className="preview-link" to={route}>
          {title}
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  ]
  return <div className="preview-item">{justifyImgRight ? PreviewInfo : PreviewInfo.reverse()}</div>
}

export default memo(PreviewItem)
