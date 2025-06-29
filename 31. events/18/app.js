// По умолчанию размер текста у параграфа 20px. При каждом клике на кнопку стоящую рядом с параграфом
//  текст увеличивается на 2 пикселя. Подсказка: узел.style = 'font-size:' + ... + 'px'

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "CLICK";
const p = document.createElement("p");
document.body.appendChild(p);
p.textContent = "Hello";
p.style.fontSize = "20px";

let val = 20;
button.addEventListener("click", () => {
  p.style.fontSize = `${(val += 100)}px`;
});
