// Блок (или кнопка), при наведении (mouseover) меняет цвет. При уходе курсора
//  (mouseout) возвращается обратно.

const div = document.createElement("div");
document.body.appendChild(div);
div.style.border = "3px solid black";
div.style.padding = "30px";

div.addEventListener("mouseover", () => {
  div.style.border = "3px solid black";
  div.style.padding = "30px";
  div.style.backgroundColor = "black";
});
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "white";
});
