export const randomCocktails = () => {
	return fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
	).then((res) => res.json().then((res) => res.drinks.splice(0, 9)));

	// fetch(
	// 	"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
	// ).then((res) =>
	// 	res
	// 		.json()
	// 		.then((res) =>
	// 			setRandomCocktail((prev) =>
	// 				[...prev, ...res.drinks].sort(() => Math.random() - 0.7).splice(0, 9)
	// 			)
	// 		)
	// );
};
