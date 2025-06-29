// На странице есть кнопка и рядом отображается в параграф количество нажатий на неё.

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "КЛАЦ";
let i = 0;
const par = document.createElement("p");
document.body.appendChild(par);

button.addEventListener("click", () => {
  par.textContent = i++;
});
