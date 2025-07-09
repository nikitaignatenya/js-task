// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

const button = document.querySelector("button");
const value = document.querySelector(".value");
const way = document.querySelector(".way");
const ul = document.querySelector("ul");
const table1 = document.querySelector(".table");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
ul.style.display = "none";

way.addEventListener("focus", () => {
  ul.style.display = "block";
});

ul.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "green";
  ul.style.backgroundColor = "white";
});
ul.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  ul.style.backgroundColor = "white";
});
ul.addEventListener("click", (event) => {
  way.value = event.target.textContent;
  ul.style.display = "none";
});

button.addEventListener("click", () => {
  try {
    const tr = document.querySelectorAll("tr");

    if (!value.value.trim()) throw new Error("Значчение пустое");
    if (!way.value.trim()) throw new Error("Путь пуст");
    if (num1.value > tr.length || num1.value <= 0)
      throw new Error("Неверное количество строк");

    if (way.value == "Строка") {
      const firstTd = document.querySelectorAll(".first td");

      for (let i = 0; i < firstTd.length; i++) {
        if (num2.value == String(i + 1)) {
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.textContent = value.value;
          table1.insertBefore(td, td[i]);
          tr.appendChild(td);
        }
      }
    } else if (way.value == "Столбец") {
      for (let i = 0; i < tr.length; i++) {
        if (num1.value == String(i + 1)) {
          const td = document.createElement("td");
          td.textContent = value.value;
          tr[i].appendChild(td);
        }
      }
    }
  } catch (error) {
    alert(error);
  }
});
