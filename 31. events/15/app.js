// Пользователь вводит имя в input, и при нажатии на кнопку имя отображается в параграф.

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "КЛАЦ";
const input = document.createElement("input");
document.body.appendChild(input);
const p = document.createElement("p");
document.body.appendChild(p);
button.addEventListener("click", () => {
  p.textContent = input.value;
});
