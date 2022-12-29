export const getGame = ({ params }) => {
	return fetch(
		`https://my-json-server.typicode.com/DimaZHV/cheers-db/games/${params.id}`
	)
		.then((res) => {
			if (!res.ok) {
				throw Error("We have an error but we didn't have time to handle it:(");
			}
			return res.json();
		})
		.then((res) => res)
		.catch((error) => console.log("Something happened! " + error.message));
};
