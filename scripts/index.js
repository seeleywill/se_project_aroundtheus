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
