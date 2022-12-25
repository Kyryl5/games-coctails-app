import { useState, useEffect } from "react";
import {
  useLoaderData,
  useSearchParams,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import BrandButton from "../UiElements/brandButton";

export default function CocktailsList() {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const coctails = useLoaderData();
  console.log("coctails >", coctails);
  console.log("location >", location);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams search >", searchParams.get("search"));
  console.log("searchParams  filter>", searchParams.get("filter"));
  useEffect(() => {
    if (searchParams.get("search")) {
      setSearch(searchParams.get("search"));
    }
    if (searchParams.get("filter")) {
      setFilter(searchParams.get("filter"));
    }
  }, []);

  useEffect(() => {
    if (search) {
      if (filter) {
        navigate(`${location.pathname}?search=${search}&filter=${filter}`);
      } else {
        navigate(`${location.pathname}?search=${search}`);
      }
    } else {
      if (filter) {
        navigate(`${location.pathname}?&filter=${filter}`);
      } else {
        navigate(`${location.pathname}`);
      }
    }
  }, [search]);

  return (
    <div className="cocktails">
      <section className="hero-head">
        <div className="hero-head-content">
          <h1>Find your favorite cocktail:</h1>
          <h2>Find one of more than 100 cocktails by name</h2>

          <div className="cocktails_search">
            {/* <label htmlFor="search"> Search coctails </label> */}
            <input
              onChange={(e) => {
                console.log("e.target.value >>> ", e.target.value);
                setSearch(e.target.value);
              }}
              value={search}
              id="search"
              placeholder="for example, Margarita"
              className="input-area"
              autoComplete="none"
            />
          </div>
          <BrandButton
            buttontext={"give me a random one"}
            buttonlink={"/games-cocktails-app/cocktails"} // - тут треба вставити посилання на генерацію рандомних коктейлів
          />
        </div>
        <div className="hero-head-image"></div>
      </section>
      <section className="search-results">
        <div className="navigation">
          <button
            onClick={() => {
              if (search) {
                navigate(`${location.pathname}?search=${search}`);
              } else {
                navigate(`${location.pathname}`);
              }
              setFilter("");
            }}
          >
            All Cocktails
          </button>
          <button
            onClick={() => {
              setFilter("alcoholic");
              if (search) {
                navigate(
                  `${location.pathname}?search=${search}&filter=alcoholic`
                );
              } else {
                navigate(`${location.pathname}?filter=alcoholic`);
              }
            }}
          >
            Alcoholic
          </button>
          <button
            onClick={() => {
              setFilter("non-alcoholic");
              if (search) {
                navigate(
                  `${location.pathname}?search=${search}&filter=non-alcoholic`
                );
              } else {
                navigate(`${location.pathname}?filter=non-alcoholic`);
              }
            }}
          >
            Non-Alcoholic
          </button>
        </div>
        <div className="cocktail_list">
          {error ? <div>Something went wrong</div> : null}
          {coctails?.map((el) => (
            <div className="cocktail" key={el.idDrink}>
              <div className="cocktail_image">
                <img src={el.strDrinkThumb} alt="" />
              </div>
              <h3>{el.strDrink}</h3>
              <h4>{"Alco or not?"}</h4>
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
              <div className="cocktail_alcoholic">{el.strAlcoholic}</div>
              <div className="cocktail_category">{el.strCategory}</div>
            </div>
          ))}
          {coctails.length === 0 && (
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
