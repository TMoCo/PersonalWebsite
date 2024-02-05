import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

import '../style/root.scss'

interface RootProps {
  routes?: string[]
}

const Root = ({ routes }: RootProps) => {
  return (
    <>
      <header>
        <NavBar routes={routes} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Root
