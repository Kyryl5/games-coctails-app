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
		fetch("https://my-json-server.typicode.com/DimaZHV/cheers-db/games")
			.then((resp) => resp.json())
			.then((response) => setData(response));
	}, []);
	return (
		<>
			<h1>GAMES</h1>
			{data.map((game, index) => (
				<Link key={index} to={`${game.id}`}>
					<img src={game.img} alt="" />
					<li>{game.name}</li>
					<li>{game.theme}</li>
				</Link>
			))}
		</>
	);
}
