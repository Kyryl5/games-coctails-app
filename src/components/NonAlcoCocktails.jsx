import { useLoaderData } from "react-router-dom";

function NonAlcoCocktails() {
	const nonAlcoCocktails = useLoaderData();
	return (
		<div className="Non-Alcoholic">
			{nonAlcoCocktails.map((el) => (
				<div className="cocktail" key={el.idDrink}>
					<div className="cocktail_image">
						<img
							style={{ width: "200px", height: "200px" }}
							src={el.strDrinkThumb}
							alt=""
						/>
					</div>
					<div className="cocktail_name">{el.strDrink}</div>
				</div>
			))}
		</div>
	);
}
export default NonAlcoCocktails;
