import { Link } from "react-router-dom";

export default function SearchedCoctailsPage({ coctails }) {
  return (
    <div className="cocktails">
      <section className="search-results">
        <div className="cocktail_list">
          {coctails?.map((el) => (
            <div className="cocktail" key={el.idDrink}>
              <div className="cocktail_image">
                <img src={el.strDrinkThumb} alt="" />
              </div>
              <h3>{el.strDrink}</h3>
              <h4>
                {el.strAlcoholic ? el.strAlcoholic + " " : null}
                {el.strCategory ? el.strCategory : null}
              </h4>
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
          {/* {coctails?.length === 0 && (
              <p>
                No such cocktail found... <br /> In the future you can add your
                own cocktail
              </p>
            )} */}
        </div>
      </section>
    </div>
  );
}
