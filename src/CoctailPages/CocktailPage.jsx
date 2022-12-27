import { useLoaderData } from "react-router-dom";

export default function CocktailPage() {
  const DRINK = useLoaderData();
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
          {DRINK.strIngredient1 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient1}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient1}</h3>
                <h4>{DRINK.strMeasure1}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient2 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient2}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient2}</h3>
                <h4>{DRINK.strMeasure2}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient3 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient3}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient3}</h3>
                <h4>{DRINK.strMeasure3}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient4 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient4}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient4}</h3>
                <h4>{DRINK.strMeasure4}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient5 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient5}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient5}</h3>
                <h4>{DRINK.strMeasure5}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient6 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient6}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient6}</h3>
                <h4>{DRINK.strMeasure6}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient7 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient7}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient7}</h3>
                <h4>{DRINK.strMeasure7}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient8 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient8}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient8}</h3>
                <h4>{DRINK.strMeasure8}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient9 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient9}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient9}</h3>
                <h4>{DRINK.strMeasure9}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient10 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient10}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient10}</h3>
                <h4>{DRINK.strMeasure10}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient11 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient11}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient11}</h3>
                <h4>{DRINK.strMeasure11}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient12 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient12}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient12}</h3>
                <h4>{DRINK.strMeasure12}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient13 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient13}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient13}</h3>
                <h4>{DRINK.strMeasure13}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient14 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient14}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient14}</h3>
                <h4>{DRINK.strMeasure14}</h4>
              </div>
            </div>
          ) : null}
          {DRINK.strIngredient15 ? (
            <div className="ingredient">
              <div className="background"> </div>
              <div className="image-frame">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${DRINK.strIngredient15}.png`}
                  alt="Ingredient Photo"
                />
              </div>
              <div className="ingradient-details">
                <h3>{DRINK.strIngredient15}</h3>
                <h4>{DRINK.strMeasure15}</h4>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
