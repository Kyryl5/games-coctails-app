import { createHashRouter } from 'react-router-dom'

import Layout from '../Layout'
import MainPage from '../MainPage'
import ErrorPage from '../ErrorPage'
import GamesList from '../GamePages/GamesList'
import CocktailsList from '../CoctailPages/CocktailsList'
import CocktailPage from '../CoctailPages/CocktailPage'
import GamePage from '../GamePages/GamePage'

import { getCocktails } from '../CoctailPages/getCocktailsList'
import { getCoctail } from '../CoctailPages/getCoctail'
import { getGame } from '../GamePages/getGame'
import { getGamesList } from '../GamePages/getGamesList'

export const ROUTES = {
  mainPage: '/',
  gamesListPage: '/games',
  cocktailsListPage: '/cocktails',
  gamePage: '/games/game/:id',
  cocktailPage: '/cocktail/:idDrink',
}

export const router = createHashRouter([
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
        loader: getGamesList,
      },
      {
        path: ROUTES.gamePage,
        element: <GamePage />,
        errorElement: <ErrorPage />,
        loader: getGame,
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
