import {parseQueryParams} from "../helpers/parseQueryParams.js"

/**
 * @returns {import("../../@types/index.js").Result}
 */
export const getData = async (queryParams = {}) => {
	try {
		const param = parseQueryParams(queryParams);

		const response = await fetch(
			`https://rickandmortyapi.com/api/character/?pages=1${param}`,
		);

		const data = await response.json();

		return data.results;
	} catch (error) {
		alert("hubo un problema al consultar los datos del API");
		return []
	}
};