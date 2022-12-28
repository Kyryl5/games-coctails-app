import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import MainPage from "../MainPage";
import ErrorPage from "../ErrorPage";
import GamesList from "../GamePages/GamesList";
import CocktailsList from "../CoctailPages/CocktailsList";
import CocktailPage from "../CoctailPages/CocktailPage";
import GameCard from "../GamePages/GameCard";

import { getCocktails } from "../CoctailPages/getCocktails";
import { getCoctail } from "../CoctailPages/getCoctail";
import { getGame } from "../GamePages/getGame";
import { getGamesList } from "../GamePages/getGamesList";

export const ROUTES = {
  mainPage: "/games-coctails-app/",
  gamesListPage: "/games-coctails-app/games",
  cocktailsListPage: "/games-coctails-app/cocktails",
  gamePage: "/games-coctails-app/games/game/:id",
  cocktailPage: "/games-coctails-app/cocktail/:idDrink",
};

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
    ],
  },
]);
