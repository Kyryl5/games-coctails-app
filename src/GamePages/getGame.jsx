export const getGame = ({ params }) => {
	return fetch(
		`https://my-json-server.typicode.com/DimaZHV/cheers-db/games/${params.id}`
	)
		.then((res) => res.json())
		.then((res) => res);
};
