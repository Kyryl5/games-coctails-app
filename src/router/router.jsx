import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import MainPage from '../MainPage'
import ErrorPage from '../ErrorPage'
import GamesList from '../GamePages/GamesList'
import CocktailsList from '../CoctailPages/CocktailsList'
import CocktailPage from '../CoctailPages/CocktailPage'
import RandomCocktailPage from '../CoctailPages/RandomCocktailPage'
import GameCard from '../GamePages/GameCard'

import { getCocktails } from '../CoctailPages/getCocktails'
import { getCoctail } from '../CoctailPages/getCoctail'
import { getRandomCoctail } from '../CoctailPages/getRandomCoctail'
import { getGame } from '../GamePages/getGame'
import { getGamesList } from '../GamePages/getGamesList'

export const ROUTES = {
  mainPage: '/games-cocktails-app/',
  gamesListPage: '/games-cocktails-app/games',
  cocktailsListPage: '/games-cocktails-app/cocktails',
  gamePage: '/games-cocktails-app/games/game/:id',
  cocktailPage: '/games-cocktails-app/cocktail/:idDrink',
  randomCocktailPage: '/games-cocktails-app/cocktail/random',
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
        loader: getGamesList,
      },
      {
        path: ROUTES.gamePage,
        element: <GameCard />,
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
      {
        path: ROUTES.randomCocktailPage,
        element: <RandomCocktailPage />,
        loader: getRandomCoctail,
      },
    ],
  },
])
