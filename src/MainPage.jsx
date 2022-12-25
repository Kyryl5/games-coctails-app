import BrandButton from "./UiElements/brandButton";

export default function MainPage() {
  return (
    <div className="app-info">
      <section className="hero-screen">
        <div className="hero-content">
          <h1>Best cocktails and board games for your party</h1>
          <BrandButton
            buttontext={"find the perfect cocktail"}
            buttonlink={"/games-cocktails-app/cocktails"}
          />
        </div>
      </section>
    </div>
  );
}
