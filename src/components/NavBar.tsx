import React, { memo } from 'react'
import { Link } from 'react-router-dom'

interface NavItemProps {
  route: string
  label?: string
}

const NavItem = ({ route, label }: NavItemProps) => {
  return (
    <li className="nav-item">
      <Link className="nav-item" to={route}>
        {label ?? route}
      </Link>
    </li>
  )
}

interface NavBarProps {
  routes?: string[]
}

const NavBar = ({ routes }: NavBarProps) => {
  return (
    <nav>
      <ul className="nav">
        <NavItem key="home" route="/" label="Thomas Moreno Cooper" />
        {routes?.map(route => <NavItem key={route} route={route} />)}
      </ul>
    </nav>
  )
}

export default memo(NavBar)
