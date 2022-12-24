import { useLoaderData } from "react-router-dom";

export default function GameCard() {
	const game = useLoaderData();
	return (
		<div>
			<ul>
				<li>
					<img src={`../.${game.img}`} alt="" />
				</li>
				<li>{game.name}</li>
				<li>{game.description}</li>
				<li>{game.link}</li>
				<li>{game.theme}</li>
			</ul>
		</div>
	);
}
