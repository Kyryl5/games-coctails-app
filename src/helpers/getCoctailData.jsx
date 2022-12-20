export const getCoctailData = async ({ params }) => {
  //test ↓
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.coctail}`
  )
  const coctail = await result.json()
  return coctail
  //test  ↑
}
