import React from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
  route: string
}

const NavItem = ({ route }: NavItem) => {
  return (
    <li className="nav-item">
      <Link to={route}>{route}</Link>
    </li>
  )
}

interface NavBarProps {
  routes?: string[]
}
const NavBar = ({ routes }: NavBarProps) => {
  return (
    <nav>
      <ul>{routes?.map(route => <NavItem key={route} route={route} />)}</ul>
    </nav>
  )
}

export default NavBar
