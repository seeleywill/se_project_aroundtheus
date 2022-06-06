const openFormButton = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector(".modal__close-button");

function toggleForm() {
  modal.classList.toggle("modal_opened");
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);
