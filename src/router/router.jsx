import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../routedApp/MainPage'
import AppInfo from '../components/AppInfo'
import ErrorPage from '../routedApp/ErrorPage'
import GamesList from '../components/GamesList'
import CoctailsList from '../components/CoctailsList'
import CoctailCard from '../routedApp/CoctailCard'
import GameCard from '../routedApp/GameCard'
import { getGameData } from '../helpers/getGameData'
import { getCoctailData } from '../helpers/getCoctailData'

const ROUTES = {
  mainPage: '/games-coctails-app/',
  gamesListPage: '/games-coctails-app/games',
  coctailsListPage: '/games-coctails-app/coctails',
  gamePage: '/games-coctails-app/games/:game',
  coctailPage: '/games-coctails-app/coctails/:coctail',
}

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AppInfo />,
        index: true,
      },
      {
        path: ROUTES.gamesListPage,
        element: <GamesList />,
      },
      {
        path: ROUTES.coctailsListPage,
        element: <CoctailsList />,
      },
      {
        path: ROUTES.gamePage,
        element: <GameCard />,
        loader: getGameData,
      },
      {
        path: ROUTES.coctailPage,
        element: <CoctailCard />,
        loader: getCoctailData,
      },
    ],
  },
])
