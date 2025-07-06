import { Link } from 'react-router-dom'

export default function RootFooter() {
  return (
    <footer className="root-footer">
      <Link to={'/'}>Thomas Moreno Cooper</Link>
      Site contents © 2021 under MIT license.
    </footer>
  )
}
