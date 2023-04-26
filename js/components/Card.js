export default class Card {
	static createCard({ title, img, status }) {
		const cardElement = document.createElement("div");
		const titleCard = document.createElement("h2");
		const imageElement = document.createElement("img");
		const statusElement = document.createElement("p");

		cardElement.className = "card";
		titleCard.textContent = title;
		imageElement.alt = "Foto de la api de rick and morty";
		imageElement.src = img;
		statusElement.innerHTML = `<strong>Estado del personaje:</strong> ${status}`;

		cardElement.appendChild(titleCard);
		cardElement.appendChild(imageElement);
		cardElement.appendChild(statusElement);

		return cardElement;
	}

	/**
	 * @param {Array<import("../@types").Result>} items
	 */
	static createCards(items = []) {
		return items.map((item) =>
			Card.createCard({title: item.name, img: item.image, status: item.status}),
		);
	}
}
