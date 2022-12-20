export const getGameData = async ({ params }) => {
  //test  ↓
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.game}`
  )
  const game = await result.json()
  return game
  //test  ↑
}
