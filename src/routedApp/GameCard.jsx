import { useLoaderData } from 'react-router-dom'

export default function GameCard() {
  //test ↓
  const { phone, name } = useLoaderData()
  // test↑

  return (
    <>
      <h1>Game:</h1>
      <p>Test field: {name} game</p>
      <p>Test field: game number {phone} </p>
    </>
  )
}
