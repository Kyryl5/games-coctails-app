import { useState, useEffect } from "react";
import {
	useLoaderData,
	useSearchParams,
	useLocation,
	useNavigate,
	Link,
} from "react-router-dom";
import BrandButton from "../UiElements/BrandButton";
import { ROUTES } from "../router/router";

export default function CocktailsList() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [error, setError] = useState(false);
	const [search, setSearch] = useState(searchParams.get("search") ?? "");
	const [filter, setFilter] = useState("");
	const [randomCocktail, setRandom] = useState("");
	const [portion, setPortion] = useState(9);

	const location = useLocation();
	const navigate = useNavigate();
	const coctails = useLoaderData();

	console.log("coctails >", coctails);

	useEffect(() => {
		if (searchParams.get("filter")) {
			setFilter(searchParams.get("filter"));
		}
	}, []);

	function paramsHandler(e) {
		setSearch(e.target.value);
		if (e.target.value.length === 0) {
			searchParams.delete("search");
			setSearchParams(searchParams);
		}
	}

	const searchCoctails = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		searchParams.set("search", search);
		setSearchParams(searchParams);
	};

	useEffect(() => {
		fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
			.then((res) => res.json())
			.then((res) =>
				setRandom(`/games-cocktails-app/cocktail/${res.drinks[0].idDrink}`)
			);
	}, []);
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [portion]);

	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
				100 &&
			portion < coctails?.length
		) {
			setPortion((prev) => prev + 9);
			console.log("add");
		}
	};
	return (
		<div className="cocktails">
			<section className="hero-head">
				<div className="hero-head-content">
					<h1>Find your favorite cocktail:</h1>
					<h2>Find one of more than 700 cocktails by name</h2>

					<div className="cocktails_search">
						<form className="search_form" onSubmit={searchCoctails}>
							<input
								onChange={paramsHandler}
								value={search}
								id="search"
								placeholder="for example, Margarita"
								className="input-area"
								autoComplete="none"
							/>
							<button>Search</button>
						</form>
					</div>
					<BrandButton
						buttontext={"give me a random one"}
						buttonlink={randomCocktail}
					/>
				</div>
				<div className="hero-head-image-cocktails"></div>
			</section>

			<section className="search-results">
				{searchParams.get("search") === null ? (
					<>
						<div
							className="navigation"
							// style={{
							//   visibility: visibleBtn ? 'vivsible' : 'hidden',
							// }}
						>
							<button
								onClick={() => {
									navigate(`${location.pathname}`);
									setFilter("");
									setPortion(9);
								}}
								style={{ border: filter === "" && "2px solid #fdca09" }} // стилізация активної кнопки(можна навішувати клас)
							>
								All Cocktails
							</button>
							<button
								onClick={() => {
									setFilter("alcoholic");
									setPortion(9);
									if (search) {
										navigate(
											`${location.pathname}?filter=alcoholic`
											// `${location.pathname}?search=${search}&filter=alcoholic`
										);
									} else {
										navigate(`${location.pathname}?filter=alcoholic`);
									}
								}}
								style={{
									border: filter === "alcoholic" && "2px solid #fdca09",
								}} // стилізация активної кнопки(можна навішувати клас)
							>
								Alcoholic
							</button>
							<button
								onClick={() => {
									setFilter("non-alcoholic");
									setPortion(9);
									if (search) {
										navigate(
											`${location.pathname}?filter=non-alcoholic`
											// `${location.pathname}?search=${search}&filter=non-alcoholic`
										);
									} else {
										navigate(`${location.pathname}?filter=non-alcoholic`);
									}
								}}
								style={{
									border: filter === "non-alcoholic" && "2px solid #fdca09",
								}} // стилізация активної кнопки(можна навішувати клас)
							>
								Non-Alcoholic
							</button>
						</div>
					</>
				) : (
					<div
						className="navigation"
						style={{
							height: "39px",
						}}
					></div>
				)}

				<div className="cocktail_list">
					{error ? <div>Something went wrong</div> : null}
					{coctails?.slice(0, portion).map((el) => (
						<div className="cocktail" key={el.idDrink}>
							<div className="cocktail_image">
								<img src={el.strDrinkThumb} alt="" />
							</div>
							<h3>{el.strDrink}</h3>
							{el.strAlcoholic ? <h4>{el.strAlcoholic}</h4> : null}
							{el.strCategory ? <h4>{el.strCategory}</h4> : null}
							<Link
								to={`/games-cocktails-app/cocktail/${el.idDrink}`}
								className="cocktail_name"
							>
								<h5>
									{"cocktail details "}
									{
										<svg
											width="10"
											height="8"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928933C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-8.74228e-08 9L19 9L19 7L8.74228e-08 7L-8.74228e-08 9Z"
												fill="#101010"
											/>
										</svg>
									}
								</h5>
							</Link>
						</div>
					))}
					{coctails?.length === 0 && (
						<p>
							No such cocktail found... <br /> In the future you can add your
							own cocktail
						</p>
					)}
				</div>
			</section>
		</div>
	);
}
