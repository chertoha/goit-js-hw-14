const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("keydown", (e) => {
  outputField.textContent = e.target.value;
});
