// 2. Есть кнопка — по клику показывайте <div> с тремя абзацами текста.

const button = document.querySelector("button");
const div = document.querySelector(".container");
div.style.display = "none";

let i = 0;
button.addEventListener("click", () => {
  if (i % 2 == 0) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  i++;
});
