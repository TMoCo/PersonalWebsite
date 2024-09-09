import React from 'react'
import { Outlet } from 'react-router-dom'
import RootHeader from '../components/RootHeader'

import '../core.scss'

interface RootProps {
  routes?: string[]
}

const Root = ({ routes }: RootProps) => {
  return (
    <>
      <RootHeader routes={routes} />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Root
