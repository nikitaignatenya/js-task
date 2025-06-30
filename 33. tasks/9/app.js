// 9. У вас есть лента из 2 карточек товара и кнопка "Показать ещё",
// которая добавляет 3 новых поста в ленту

const button = document.querySelector("button");
const div = document.querySelector(".container");
const cart = document.querySelector(".cart");

button.addEventListener("click", () => {
  for (let i = 1; i <= 3; i++) {
    const cartNew = document.createElement("div");
    div.appendChild(cartNew);
    cartNew.style.width = "300px";
    cartNew.style.height = "200px";
    cartNew.style.backgroundColor = "blue";
    cartNew.style.marginTop = "20px";
  }
});
