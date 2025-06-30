// 3. Пользователь вводит текст в input и нажимает кнопку
//  — добавляйте этот комментарий в
// список ul расположенный ниже

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
});
