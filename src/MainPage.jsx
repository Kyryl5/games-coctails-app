import BrandButton from "./UiElements/BrandButton.jsx";

import { ROUTES } from "./router/router";

export default function MainPage() {
  return (
    <div className="app-info">
      <section className="hero-screen">
        <div className="hero-content">
          <h1>Best cocktails and board games for your party</h1>
          <BrandButton
            buttontext={"find the perfect cocktail"}
            buttonlink={ROUTES.cocktailsListPage}
          />
        </div>
      </section>
      <section className="promo-screen">
        <div className="benefits">
          <div className="icon-and-text">
            <div className="logo-icon"></div>
            <h2>
              Cheer App is indispensable when you planning a party with your
              friends
            </h2>
          </div>
          <div className="icon-and-text">
            <div className="services-img"></div>
          </div>
          <div className="icon-and-text">
            <h3>
              The most comprehensive cocktail collection ever
              <a href="/games-cocktails-app/cocktails">find a cocktail</a>
            </h3>
          </div>
        </div>
      </section>
      <section className="promo-screen">
        <div className="cover-image"></div>
      </section>
      <section className="promo-screen">
        <div className="benefits-2">
          <div className="half-cover-image"></div>
          <div className="benefits-info">
            <h2>The best party games at your fingertips</h2>

            <div className="benefit">
              <div className="benefiticon benefiticon-light"></div>
              <div className="benefit-text">
                <h3>Game ideas</h3>
                <p>
                  Not sure what game to play with your friends? Cheer App will
                  be happy to help you
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefiticon benefiticon-games"></div>
              <div className="benefit-text">
                <h3>Games for every taste</h3>
                <p>
                  Have you already played many different games and want
                  something new? Check out our board games section
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefiticon benefiticon-random"></div>
              <div className="benefit-text">
                <h3>Random game</h3>
                <p>
                  Don't waste time looking for the game you need. One click -
                  and an interesting board game is found
                </p>
              </div>
            </div>
            <a href="/games-cocktails-app/games">find a game</a>
          </div>
        </div>
      </section>
    </div>
  );
}
