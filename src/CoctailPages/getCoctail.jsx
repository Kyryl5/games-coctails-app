export const getCoctail = async ({ params }) => {
  const result = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`
  )
  const coctail = await result.json()
  return coctail.drinks[0]
}
