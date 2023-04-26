export const sleep = (time = 1000, fn = () => {}) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(fn());
		}, time),
	);
};
