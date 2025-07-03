import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ route, label }) => {
  return (
    <li className="link">
      <Link to={route}>{label ?? route}</Link>
    </li>
  )
}


const NavBar = ({ routes }) => {
  return (
    <nav>
      <ul className="nav-links">{routes?.map(route => <NavLink key={route} route={route} />)}</ul>
    </nav>
  )
}

export default memo(NavBar)
