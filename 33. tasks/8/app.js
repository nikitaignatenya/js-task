// Дополните 7 задачу кнопкой "Очистить всё", которая удаляет все <li> из списка.

const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
});

const remove = document.createElement("button");
remove.textContent = "remove";
document.body.appendChild(remove);

remove.addEventListener("click", () => {
  const li = document.querySelectorAll("ul li");
  for (let i = 0; i < li.length; i++) {
    ul.removeChild(li[i]);
  }
});
