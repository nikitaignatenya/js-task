// 1. По нажатию на кнопку заменяйте <h1> с "Добро пожаловать"
//  на "Приятно вас видеть".

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "click";

const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Добро пожаловать";

button.addEventListener("click", () => {
  h1.textContent = "Приятно вас видеть";
});
