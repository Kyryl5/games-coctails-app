import { useLoaderData } from "react-router-dom";

export default function CocktailPage() {
  const { strDrink, strDrinkThumb, strAlcoholic } = useLoaderData();

  return (
    <>
      <h1>Cocktail:</h1>
      <img
        style={{ width: "200px", height: "200px" }}
        src={strDrinkThumb}
        alt=""
      />
      <p>{strDrink} cocktail</p>
      <p>{strAlcoholic} cocktail</p>
    </>
  );
}
