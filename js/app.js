import { getData } from "./api/api.js";
import Card from "./components/Card.js";
import SelectOption from "./components/SelectOption.js";
import { sleep } from "./helpers/sleep.js";

let dataCharacters = [];
const queryParams = {
  name: "",
};

const searchSelectElement = document.getElementById("searchSelect");
const cardsContainerElement = document.getElementById("cardContainer");
const formFiltersElement = document.getElementById("formFilters");
const buttonSubmit = document.getElementById("buttonSubmit");

const onChangeCharacterToSearch = () => {
  const value = searchSelectElement.value;
  queryParams.name =
    value !== "" && value !== "0" && value !== "1" ? value : "";
};

const onSubmitformFilters = async (e) => {
  e.preventDefault();
  await loadCharactersData();

  if (dataCharacters[0] && queryParams.name && queryParams.name !== "") {
    dataCharacters = [dataCharacters[0]];
  }

  buttonSubmit.disabled = searchSelectElement.disabled = true;

  await sleep(500, async () => {
    buttonSubmit.disabled = searchSelectElement.disabled = false;
    loadCards();
  });
};

const loadSelectOptions = () => {
  searchSelectElement.innerHTML = "";
  SelectOption.createOptions(dataCharacters).forEach((option) =>
    searchSelectElement.appendChild(option)
  );
};

const loadCharactersData = async () => {
  const characters = await getData(queryParams);
  dataCharacters = characters.filter((_, index) => index >= 0 && index <= 17);
};

const loadCards = () => {
  cardsContainerElement.innerHTML = "";
  Card.createCards(dataCharacters).forEach((card) =>
    cardsContainerElement.appendChild(card)
  );
};

const loadApp = async () => {
  await loadCharactersData();
  loadSelectOptions();
  loadCards();

  searchSelectElement.addEventListener("change", onChangeCharacterToSearch);
  formFiltersElement.addEventListener("submit", onSubmitformFilters);
};

(async () => {
  await loadApp();
})();
