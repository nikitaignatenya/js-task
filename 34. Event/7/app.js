// 7. Создайте форму с выпадающим списком для выбора единицы измерения
// (например, дюймы, сантиметры, метры). При выборе единицы измерения
// отображайте соответствующее значение в консоли.

const input = document.querySelector("input");
const ul = document.querySelector("ul");
ul.style.display = "none";

input.addEventListener("focus", () => {
  ul.style.display = "block";
});

ul.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "wheat";
  ul.style.backgroundColor = "white";
});
ul.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  ul.style.backgroundColor = "white";
});

ul.addEventListener("click", (event) => {
  input.value = event.target.textContent;
  ul.style.display = "none";
});
