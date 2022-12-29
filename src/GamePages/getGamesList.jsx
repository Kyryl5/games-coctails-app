export const getGamesList = ({ params }) => {
	return fetch("https://my-json-server.typicode.com/DimaZHV/cheers-db/games")
		.then((resp) => {
			if (!resp.ok) {
				throw Error("We have an error but we didn't have time to handle it:(");
			}
			return resp.json();
		})
		.catch((error) => console.log("Something happened! " + error.message));
};
