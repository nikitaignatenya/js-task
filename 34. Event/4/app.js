// 4. По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const button = document.querySelector("button");
const h = document.createElement("h1");

button.addEventListener("mouseover", () => {
  h.textContent = "Hi";
  document.body.appendChild(h);
});

button.addEventListener("mouseout", () => {
  h.style.display = "none";
});
