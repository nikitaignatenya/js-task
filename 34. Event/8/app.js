// 8. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const input = document.querySelector("input");
const div = document.querySelector("div");
let arr = [];
const p = document.createElement("p");

let i = -1;
input.addEventListener("keypress", (event) => {
  i++;
  if (event.key == "Enter") {
    try {
      if (!input.value.trim()) throw new Error("Инпут пуст");
      arr.push(input.value.trim());
      p.style.color = "black";
      p.textContent = arr;
      div.appendChild(p);
    } catch (error) {
      p.textContent = error.message;
      p.style.color = "red";
      div.appendChild(p);
    }
  }
});
