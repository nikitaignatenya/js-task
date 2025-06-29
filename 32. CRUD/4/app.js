// 4. Найдите на странице элемент <h1> и замените его на новый заголовок <h2> с текстом «Новый
// заголовок».

const h = document.querySelector("h1");
const h2 = document.createElement("h2");

h2.textContent = "Hi";

h.parentNode.replaceChild(h2, h);
