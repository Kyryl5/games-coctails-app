import { useLoaderData } from "react-router-dom";

export default function CocktailCard() {
	//test ↓
	const { phone, name } = useLoaderData();
	// test↑

	return (
		<>
			<h1>Cocktail:</h1>
			<p>test field:{name} cocktail</p>
			<p>test field: cocktail prise {phone} </p>
		</>
	);
}
