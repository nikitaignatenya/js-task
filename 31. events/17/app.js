// При нажатии на кнопку у прямоугольного блока меняется цвет фона на случайный
// из const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan",
//  "magenta" ];.
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "КЛАЦ";
const div = document.createElement("div");
document.body.appendChild(div);
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "1px solid black";
div.style.margin = "30px";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "cyan",
  "magenta",
];

button.addEventListener("click", () => {
  div.style.backgroundColor = colors[Math.round(Math.random() * 10)];
});
