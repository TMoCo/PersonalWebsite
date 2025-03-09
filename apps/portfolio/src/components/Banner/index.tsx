import React, { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

const Banner = ({ children }: BannerProps) => {
  return (
    <div className="banner">
      <b>
        <i>{children}</i>
      </b>
    </div>
  )
}

export default Banner
