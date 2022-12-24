import { useLoaderData, Link } from "react-router-dom";

export default function GamesList() {
	const games = useLoaderData();

	return (
		<>
			<h1>GAMES</h1>
			{games.map((game, index) => (
				<Link key={index} to={`game/${game.id}`}>
					<img src={game.img} alt="" />
					<li>{game.name}</li>
					<li>{game.theme}</li>
				</Link>
			))}
		</>
	);
}
