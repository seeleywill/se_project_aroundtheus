const openFormButton = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector(".modal__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const form = document.querySelector(".modal__container");

function toggleForm() {
  modal.classList.toggle("modal_opened");
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  modal.classList.toggle("modal_opened");
}

form.addEventListener("submit", handleFormSubmit);

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

for (let i = 0; i < initialCards.length; i++) {
  const card = document.querySelector("#card-template").content.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardText = card.querySelector(".card__text");
  cardImage.src = initialCards.link;
  cardImage.alt = initialCards.name;
  cardText.textContent = initialCards.name;
}
