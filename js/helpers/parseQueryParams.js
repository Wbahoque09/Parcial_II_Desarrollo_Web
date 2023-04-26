export const parseQueryParams = (queryParams = {}) => {
	return Object.entries(queryParams)
		.filter(([_, value]) => value && value !== "")
		.map(([key, value]) => `&${key}=${value}`)
		.join("");
};