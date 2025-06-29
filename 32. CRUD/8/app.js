// 8. На странице есть список <ul>, поле ввода и кнопка. Добавляйте в список только те значения,
// которые являются корректными email-адресами (с помощью регулярного выражения). Если
// email невалиден — бросьте исключение с соответствующим сообщением.

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
const regexp = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i;

button.addEventListener("click", () => {
  if (regexp.test(input.value)) {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
  } else {
    alert("Не совпадает");
  }
});
