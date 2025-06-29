// Скачать 2 любые картинки из интернета. На странице отображается одна картинка.
//  При нажатии на кнопку стоящую рядом она заменяется на другую.
// Подсказка: узел.src = './../../../...'

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "click";

const img = document.createElement("img");
document.body.appendChild(img);
img.src = "./img/5fd531dca6427c7_upscaled.jpeg";
img.style.width = "200px";
img.style.display = "block";
img.style.margin = `20px`;
let i = 0;

button.addEventListener("click", () => {
  i % 2 == 0
    ? (img.src = "./img/milye-kotiki-16.webp")
    : (img.src = "./img/5fd531dca6427c7_upscaled.jpeg");

  i++;
});
