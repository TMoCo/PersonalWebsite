import React, { memo } from 'react'
import { Link } from 'react-router-dom'

interface NavLinkProps {
  route: string
  label?: string
}

const NavLink = ({ route, label }: NavLinkProps) => {
  return (
    <li className="link">
      <Link to={route}>{label ?? route}</Link>
    </li>
  )
}

interface NavBarProps {
  routes?: string[]
}

const NavBar = ({ routes }: NavBarProps) => {
  return (
    <nav>
      <ul className="nav-links">{routes?.map(route => <NavLink key={route} route={route} />)}</ul>
    </nav>
  )
}

export default memo(NavBar)
