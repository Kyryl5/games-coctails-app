export const getCoctail = ({ params }) => {
	return fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`
	)
		.then((res) => {
			if (!res.ok) {
				throw Error("We have an error but we didn't have time to handle it:(");
			}
			return res.json();
		})
		.then((res) => {
			return res.drinks[0];
		})
		.catch((error) => console.log("Something happened! " + error.message));
};
