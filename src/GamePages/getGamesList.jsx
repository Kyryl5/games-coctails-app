export const getGamesList = ({ params }) => {
	return fetch(
		"https://my-json-server.typicode.com/DimaZHV/cheers-db/games"
	).then((resp) => resp.json());
};
