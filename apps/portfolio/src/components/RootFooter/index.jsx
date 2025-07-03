import React from 'react'
import { Link } from 'react-router-dom'

const RootFooter = () => {
  return (
    <footer className="root-footer">
      <div className="section">
        <Link to={'/'}>Thomas Moreno Cooper</Link>
      </div>
      <div className="section">Site contents © 2021 under MIT license.</div>
    </footer>
  )
}

export default RootFooter
