import { useLoaderData } from 'react-router-dom'

export default function CoctailCard() {
  //test ↓
  const { phone, name } = useLoaderData()
  // test↑

  return (
    <>
      <h1>Coctail:</h1>
      <p>test field:{name} coctail</p>
      <p>test field: coctail prise {phone} </p>
    </>
  )
}
