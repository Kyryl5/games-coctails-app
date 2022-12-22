import { createBrowserRouter } from "react-router-dom";
import MainPage from "../routedApp/MainPage";
import AppInfo from "../components/AppInfo";
import ErrorPage from "../routedApp/ErrorPage";
import GamesList from "../components/GamesList";
import CocktailsList from "../components/CocktailsList";
import CocktailCard from "../routedApp/CocktailCard";
import GameCard from "../routedApp/GameCard";
import { getGameData } from "../helpers/getGameData";
import { getCocktailData } from "../helpers/getCocktailData";
import AlcoCocktails from "../components/AlcoCocktails";
import NonAlcoCocktails from "../components/NonAlcoCocktails";
import RandomCocktails from "../components/RandomCocktails";
import { alcoholicCocktails } from "../components/myalcococktails";
import { nonAlcoholicCocktails } from "../components/mynonalcococktails";
import { randomCocktails } from "../components/myrandomcocktails";

const ROUTES = {
	mainPage: "/games-cocktails-app/",
	gamesListPage: "/games-cocktails-app/games",
	cocktailsListPage: "/games-cocktails-app/cocktails",
	gamePage: "/games-cocktails-app/games/:game",
	cocktailPage: "/games-cocktails-app/cocktails/:cocktail",
	cocktailAlcoholic: "/games-cocktails-app/cocktails/alcoholic",
	cocktailNonAlcoholic: "/games-cocktails-app/cocktails/non-alcoholic",
	cocktailRandom: "/games-cocktails-app/cocktails/random",
};

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
				path: ROUTES.cocktailsListPage,
				element: <CocktailsList />,
				children: [
					{
						path: ROUTES.cocktailAlcoholic,
						element: <AlcoCocktails />,
						loader: alcoholicCocktails,
					},
					{
						path: ROUTES.cocktailNonAlcoholic,
						element: <NonAlcoCocktails />,
						loader: nonAlcoholicCocktails,
					},
					{
						path: ROUTES.cocktailRandom,
						element: <RandomCocktails />,
						loader: randomCocktails,
					},
				],
			},
			{
				path: ROUTES.gamePage,
				element: <GameCard />,
				loader: getGameData,
			},
			{
				path: ROUTES.cocktailPage,
				element: <CocktailCard />,
				loader: getCocktailData,
			},
		],
	},
]);
