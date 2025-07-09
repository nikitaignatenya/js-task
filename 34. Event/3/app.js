// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const body = document.querySelector("body");
const p = document.querySelector("p");

let i = 0;
body.addEventListener("click", () => {
  if ((event.target.id = "button" && i % 2 == 0)) p.style.display = "none";
  if ((event.target.id = "button" && i % 2 !== 0)) p.style.display = "block";
  i++;
});
