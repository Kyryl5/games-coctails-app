import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GamesList() {
	//test ↓
	const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then((resp) => resp.json())
	// 		.then((response) => setData(response));
	// }, []);
	//test  ↑
	useEffect(() => {
		fetch("http://localhost:3004/games")
			.then((resp) => resp.json())
			.then((response) => setData(response));
	}, []);
	return (
		<>
			<h1>GAMES</h1>
			{data.map((game, index) => (
				<Link key={index} to={`${game.id}`}>
					<li>{game.name}</li>
					<li>{game.description}</li>
					<img src={game.img} alt="" />
				</Link>
			))}
		</>
	);
}
