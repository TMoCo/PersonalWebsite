import React from 'react'
import { Outlet } from 'react-router-dom'
import RootHeader from '../components/RootHeader'

import '../core.scss'
import RootFooter from '../components/RootFooter'

interface RootProps {
  routes?: string[]
}

const Root = ({ routes }: RootProps) => {
  return (
    <>
      <RootHeader routes={routes} />
      <main className="content">
        <Outlet />
      </main>
      <RootFooter />
    </>
  )
}

export default Root
