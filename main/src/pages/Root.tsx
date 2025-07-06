import { Outlet, useLocation } from 'react-router-dom'
import RootHeader from '../components/RootHeader'

import RootFooter from '../components/RootFooter'

import { useEffect, useState } from 'react'

interface RootProps {
  routes?: string[]
}

function Root({ routes }: RootProps) {
  const [theme, setTheme] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes('portfolio')) {
      setTheme('portfolio')
      return
    }
    setTheme('')
  }, [pathname])

  return (
    <>
      <RootHeader routes={routes} />
      <main className={theme}>
        <Outlet />
      </main>
      <RootFooter />
    </>
  )
}

export default Root
