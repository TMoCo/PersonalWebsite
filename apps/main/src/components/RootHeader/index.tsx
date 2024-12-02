import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'

interface RootHeaderProps {
  routes?: string[]
}
const RootHeader = ({ routes }: RootHeaderProps) => {
  return (
    <header className="root-header">
      <h1 className="heading">
        <Link to={'/'}>Thomas Moreno Cooper</Link>
      </h1>
      <NavBar routes={routes} />
    </header>
  )
}

export default RootHeader
