import React, { PropsWithChildren, memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

interface PreviewTabProps {
  imgUri: string
  title: string
  route: string
  justifyImgRight?: boolean
}

const PreviewTab = ({
  imgUri,
  title,
  route,
  justifyImgRight = false,
  children: description
}: PropsWithChildren<PreviewTabProps>) => {
  const PreviewInfo = useMemo(() => {
    const PreviewInfo = [
      <img key="preview-img" src={imgUri} className={`preview-img`}></img>,
      <div key="preview-description" className="preview-info">
        <h2 className="preview-title">
          <Link className="preview-link" to={route}>
            {title}
          </Link>
        </h2>
        {description}
      </div>
    ]
    return [PreviewInfo[Number(justifyImgRight)], PreviewInfo[Number(!justifyImgRight)]]
  }, [imgUri, route, title, description, justifyImgRight])
  return <div className="preview-item">{PreviewInfo}</div>
}

export default memo(PreviewTab)
