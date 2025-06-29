// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const input = document.createElement("input");
document.body.appendChild(input);
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "click";
const p = document.createElement("p");
document.body.appendChild(p);
let arr = [];
button.addEventListener("click", () => {
  arr.push(input.value);
  p.textContent = arr;
  console.log(arr);
});
