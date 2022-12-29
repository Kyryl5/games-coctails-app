import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CocktailPage() {
  const DRINK = useLoaderData();
  const [ingradients, setIngradients] = useState([]);
  const [ingradientsQtt, setIngradientsQtt] = useState([]);

  useEffect(() => {
    const ingradientsArray = [];
    const ingradientsQttArray = [];

    for (let i = 1; i <= 15; i++) {
      let ingredient = `strIngredient${i}`;
      let ingredientQtt = `strMeasure${i}`;

      if (DRINK[ingredient]) {
        ingradientsArray.push(DRINK[ingredient]);
        ingradientsQttArray.push(DRINK[ingredientQtt]);
      }
    }

    setIngradients(ingradientsArray);
    setIngradientsQtt(ingradientsQttArray);
  }, []);

  return (
    <>
      <section className="hero-head">
        <div className="coctail-hero">
          <h1>{DRINK.strDrink}</h1>
          <h3>
            {DRINK.strAlcoholic} {DRINK.strCategory}
          </h3>
        </div>
      </section>
      <div className="main-image-frame">
        <img src={DRINK.strDrinkThumb} alt="" />
        <h5>Type of glass: {DRINK.strGlass}</h5>
      </div>
      <section className="coctail-info">
        <h2>Instructions:</h2>
        <p> {DRINK.strInstructions}</p>
        <h2>Igredients:</h2>
        <div className="ingredients">
          {ingradients.map((el, i) => (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${el}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{el}</h3>
                <h4>{ingradientsQtt[i]}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
