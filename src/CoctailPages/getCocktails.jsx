export const getCocktails = async ({ request }) => {
  let result

  if (!request.url.includes('filter')) {
    const resultAlc = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    ).then((res) => res.json().then((res) => res.drinks))
    const resultNonAlc = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    ).then((res) => res.json().then((res) => res.drinks))

    result = resultAlc.reduce((acc, el, i) => {
      if (!resultNonAlc[i]) {
        return [...acc, el]
      }
      return [...acc, el, resultNonAlc[i]]
    }, [])
  }

  if (request.url.includes('filter=alcoholic')) {
    result = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    ).then((res) => res.json().then((res) => res.drinks))
  }

  if (request.url.includes('filter=non-alcoholic')) {
    result = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    ).then((res) => res.json().then((res) => res.drinks))
  }

  if (request.url.includes('search')) {
    const searchTerm = new URL(request.url).searchParams
    const searchPar = searchTerm.get('search')
    result = await fetch(
      ` https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchPar}`
    ).then((res) => res.json().then((res) => res.drinks))
  }

  return result
}
