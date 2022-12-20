import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry something went wrong</p>
      <p>{error.statusText ?? error.message}</p>
    </>
  )
}
