// 2. Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет

const body = document.querySelector("body");

body.addEventListener("click", () => {
  event.target.style.backgroundColor = "green";
});
