// 5. У элемента есть кнопка "Подробнее" — по клику добавляйте абзац с описанием.

const button = document.querySelector("button");
const div = document.querySelector(".description");
div.style.display = "none";

button.addEventListener("click", () => {
  div.style.display = "inline";
});
