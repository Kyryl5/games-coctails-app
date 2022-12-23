import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import MainPage from '../MainPage'
import ErrorPage from '../ErrorPage'
import GamesList from '../GamePages/GamesList'
import CocktailsList from '../CoctailPages/CocktailsList'

import { getCocktails } from '../CoctailPages/getCocktails'
import { getCoctail } from '../CoctailPages/getCoctail'
import CocktailPage from '../CoctailPages/CocktailPage'

const ROUTES = {
  mainPage: '/games-cocktails-app/',
  gamesListPage: '/games-cocktails-app/games',
  cocktailsListPage: '/games-cocktails-app/cocktails',
  gamePage: '/games-cocktails-app/games/:game',
  cocktailPage: '/games-cocktails-app/cocktail/:idDrink',
}

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        path: ROUTES.gamesListPage,
        element: <GamesList />,
      },
      {
        path: ROUTES.cocktailsListPage,
        element: <CocktailsList />,
        loader: getCocktails,
      },
      {
        path: ROUTES.cocktailPage,
        element: <CocktailPage />,
        loader: getCoctail,
      },
    ],
  },
])
