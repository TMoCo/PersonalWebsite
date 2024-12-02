import React, { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

const Banner = ({ children }: BannerProps) => {
  return <div className="banner">{children}</div>
}

export default Banner
