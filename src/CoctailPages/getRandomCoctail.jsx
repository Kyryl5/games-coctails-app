export const getRandomCoctail = async () => {
  const result = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  )
  const randomCoctail = await result.json()
  console.log('randomCoctail >', randomCoctail.drinks)
  return randomCoctail.drinks[0]
}
