import { useLoaderData } from "react-router-dom";

export default function CocktailPage() {
	const DRINK = useLoaderData();
	return (
		<>
			<h1>Cocktail: {DRINK.strDrink}</h1>
			<div>
				<img
					style={{ width: "200px", height: "200px" }}
					src={DRINK.strDrinkThumb}
					alt=""
				/>
			</div>
			<div>Category: {DRINK.strCategory}</div>
			<p>Type of glass: {DRINK.strGlass}</p>
			<p>{DRINK.strAlcoholic} cocktail</p>
			<div>Instructions: {DRINK.strInstructions}</div>
			<div className="ingredients">
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient1}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient1}</div>
					<div>{DRINK.strMeasure1}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient2}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient2}</div>
					<div>{DRINK.strMeasure2}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient3}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient3}</div>
					<div>{DRINK.strMeasure3}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient4}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient4}</div>
					<div>{DRINK.strMeasure4}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient5}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient5}</div>
					<div>{DRINK.strMeasure5}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient6}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient6}</div>
					<div>{DRINK.strMeasure6}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient7}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient7}</div>
					<div>{DRINK.strMeasure7}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient8}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient8}</div>
					<div>{DRINK.strMeasure8}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient9}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient9}</div>
					<div>{DRINK.strMeasure9}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient10}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient10}</div>
					<div>{DRINK.strMeasure10}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient11}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient11}</div>
					<div>{DRINK.strMeasure11}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient12}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient12}</div>
					<div>{DRINK.strMeasure12}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient13}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient13}</div>
					<div>{DRINK.strMeasure13}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient14}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient14}</div>
					<div>{DRINK.strMeasure14}</div>
				</div>
				<div className="ingredient">
					<div>
						<img
							style={{ width: "200px", heigh: "200px" }}
							src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient15}.png`}
							alt=""
						/>
					</div>
					<div>{DRINK.strIngredient15}</div>
					<div>{DRINK.strMeasure15}</div>
				</div>
			</div>
		</>
	);
}
