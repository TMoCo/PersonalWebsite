import React from 'react'

interface BannerProps {
  text: string
}

const Banner = ({ text }: BannerProps) => {
  return (
    <div className="banner">
      <span>{text}</span>
    </div>
  )
}

export default Banner
