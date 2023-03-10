import BrandButton from "../UiElements/BrandButton";
import { useState, useEffect } from "react";
import {
  useLoaderData,
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function GamesList() {
  const games = useLoaderData();
  const [portion, setPortion] = useState(6);
  const [filter, setFilter] = useState("all-games");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("filter")) {
      setFilter(searchParams.get("filter"));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [portion]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      portion < games?.length
    ) {
      setPortion((prev) => prev + 6);
    }
  };

  function gameFilter(obj) {
    if (filter === "all-games") {
      return obj.theme === obj.theme;
    }
    return obj.theme === filter;
  }

  function clickHandler(num, filt_nav) {
    setPortion(num);
    setFilter(filt_nav);
    navigate(`${location.pathname}?filter=${filt_nav}`);
  }

  return (
    <div className="games">
      <section className="hero-head hero-head-games">
        <div className="hero-head-content">
          <h1>Find your favorite Game</h1>
          <h2>We created a games database for your fun</h2>
          <BrandButton
            buttontext={"give me a random game"}
            buttonlink={`/games/game/${Math.floor(
              Math.random() * (games.length - games[0].id) + games[0].id
            )}`}
          />
        </div>
        <div className="hero-head-image-games"></div>
      </section>
      <section className="search-results">
        <div className="navigation">
          <button
            onClick={() => clickHandler(6, "all-games")}
            style={{ border: filter === "all-games" && "2px solid #fdca09" }}
          >
            All Games
          </button>
          <button
            onClick={() => clickHandler(6, "alcoholic")}
            style={{
              border: filter === "alcoholic" && "2px solid #fdca09",
            }}
          >
            Alcoholic
          </button>
          <button
            onClick={() => clickHandler(6, "non-alcoholic")}
            style={{
              border: filter === "non-alcoholic" && "2px solid #fdca09",
            }}
          >
            Non-Alcoholic
          </button>
        </div>
      </section>
      <section className="search-results">
        <div className="games_list">
          {games
            .filter((game) => gameFilter(game))
            .slice(0, portion)
            .map((game, index) => (
              <div key={index} className="game">
                <div className="game_image">
                  <img src={game.img} alt="" />
                </div>
                <h3>{game.name}</h3>
                <h4>{game.theme} game</h4>
                <Link to={`game/${game.id}`}>
                  <h5>
                    {"game details "}
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
        </div>
      </section>
    </div>
  );
}
