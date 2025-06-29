// 7. На странице есть список <ul>, поле ввода <input> и кнопка <button>. Создайте
// функциональность, при которой по нажатию на кнопку текст из поля ввода будет добавляться
// в конец списка как новый элемент <li>.

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const click = document.querySelector("button");

click.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
});
