export const nonAlcoholicCocktails = () => {
	return fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
	).then((res) => res.json().then((res) => res.drinks));
};
