import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CocktailsList() {
	const [cocktailName, setCocktailName] = useState("");
	const [searchedCocktails, setSearchedCocktails] = useState([]);
	const [error, setError] = useState(false);
	const [alcoCocktails, setAlcoCocktails] = useState([]);
	const [nonAlcoCocktails, setNonAlcoCocktails] = useState([]);
	const [randomCocktail, setRandomCocktail] = useState([]);

	const searchByName = (e) => {
		e.preventDefault();
		if (cocktailName.length > 0) {
			fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
			)
				.then((res) => {
					if (res.ok) {
						setError(false);
						return res.json();
					}
				})
				.then((res) => setSearchedCocktails(res.drinks))
				.catch((error) => {
					console.log(error);
					setError(true);
				});
		}
	};
	const alcoholicCocktails = () => {
		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
		).then((res) => res.json().then((res) => setAlcoCocktails(res.drinks)));
	};
	const nonAlcoholicCocktails = () => {
		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
		).then((res) => res.json().then((res) => setNonAlcoCocktails(res.drinks)));
	};

	const searchRandomCocktail = () => {
		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
		).then((res) => res.json().then((res) => setRandomCocktail(res.drinks)));
		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
		).then((res) =>
			res
				.json()
				.then((res) =>
					setRandomCocktail((prev) =>
						[...prev, ...res.drinks]
							.sort(() => Math.random() - 0.7)
							.splice(0, 9)
					)
				)
		);
	};
	return (
		<div className="cocktails">
			<h1>COCKTAILS</h1>
			<button
				onClick={() => {
					setSearchedCocktails([]);
					setAlcoCocktails([]);
					setNonAlcoCocktails([]);
					setRandomCocktail([]);
				}}
			>
				Clear
			</button>
			<div className="cocktails_search">
				<form
					onSubmit={(e) => {
						searchByName(e);
					}}
					action=""
				>
					<input
						onChange={(e) => setCocktailName(e.target.value)}
						type="text"
						name=""
						value={cocktailName}
						id=""
					/>
					<button
						onClick={(e) => {
							searchByName(e);
						}}
					>
						Search
					</button>
				</form>
			</div>
			<div className="navigation">
				<button onClick={searchRandomCocktail}>Random Cocktails</button>
				<button onClick={alcoholicCocktails}>Alcoholic</button>
				<button onClick={nonAlcoholicCocktails}>Non-Alcoholic</button>
			</div>
			<div className="Random_Cocktails">
				{randomCocktail?.map((el) => (
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
			<div className="Alcoholic">
				{alcoCocktails?.map((el) => (
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
			<div className="Non-Alcoholic">
				{nonAlcoCocktails?.map((el) => (
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
			<div className="cocktail_list">
				{error ? <div>Something went wrong</div> : null}
				{searchedCocktails?.map((el) => (
					<div className="cocktail" key={el.idDrink}>
						<div className="cocktail_image">
							<img
								style={{ width: "200px", height: "200px" }}
								src={el.strDrinkThumb}
								alt=""
							/>
						</div>
						<div className="cocktail_name">{el.strDrink}</div>
						<div className="cocktail_alcoholic">{el.strAlcoholic}</div>
						<div className="cocktail_category">{el.strCategory}</div>
					</div>
				))}
			</div>
		</div>
	);
}
