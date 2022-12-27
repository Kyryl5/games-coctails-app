import BrandButton from "../UiElements/brandButton";
import { useLoaderData } from "react-router-dom";

export default function GameCard() {
  const game = useLoaderData();
  return (
    <>
      <section className="hero-head hero-head-games">
        <div className="game-hero">
          <h1>{game.name}</h1>
          <h3>{game.theme} game</h3>
        </div>
      </section>
      <div className="main-image-frame-game">
        <img src={`../.${game.img}`} alt="" />
      </div>
      <section className="coctail-info">
        <h2>Description</h2>
        <p>{game.description}</p>
        <BrandButton buttontext={"buy this game"} buttonlink={game.link} />
      </section>
    </>
  );
}
