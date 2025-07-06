import { useRouteError } from 'react-router-dom'

export default function () {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <h1>Oops!</h1>
      Sorry, an unexpected error has occurred.
      <p>{`${error}`}</p>
    </>
  )
}
