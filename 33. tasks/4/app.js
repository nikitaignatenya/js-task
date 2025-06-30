// 4. Есть контейнер в виде карточки товара с кнопкой "Удалить" —
// по клику убирайте её со
// страницы.

const div = document.querySelector(".container");
const button = document.querySelector("button");

div.style.width = "200px";
div.style.height = "500px";
div.style.backgroundColor = "green";

button.addEventListener("click", () => {
  div.style.display = "none";
});
