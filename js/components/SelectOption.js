export default class SelectOption {
	static createOption({ value, text }) {
		const optionElement = document.createElement("option");
		optionElement.value = value;
		optionElement.textContent = text;

		return optionElement;
	}

	/**
	 * @param {Array<import("../@types").Result>} items
	 */
	static createOptions(items = []) {
		const options = [];
		const defaultOption = document.createElement("option");
		const optionAll =  document.createElement("option");

		defaultOption.selected = true;
		defaultOption.value = "0";
		defaultOption.textContent = "Escoja un personaje";

		optionAll.value = "1";
		optionAll.textContent = "Listar todos";

		options.push(defaultOption);
		options.push(optionAll)

		items.forEach((item) => {
			const option = SelectOption.createOption({
				value: item.name,
				text: item.name,
			});
			options.push(option);
		});

		return options;
	}
}
