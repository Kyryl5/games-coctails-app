import { useLoaderData, Link } from 'react-router-dom'
import { ROUTES } from '../router/router'

export default function RandomCocktailPage() {
  const { strDrink, strDrinkThumb, strAlcoholic, strInstructions } =
    useLoaderData()

  return (
    <>
      <Link to={ROUTES.cocktailsListPage}>← Back to coctail list</Link>
      <h1>{strDrink}</h1>
      <p>{strAlcoholic} </p>
      <img
        style={{ width: '200px', height: '200px' }}
        src={strDrinkThumb}
        alt={strDrink}
      />
      <p>{strInstructions}</p>
    </>
  )
}
