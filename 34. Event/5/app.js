// 5. По двойному клику на кнопку изменить цвет кнопки

// const button = document.querySelector("button");

// button.addEventListener("dblclick", () => {
//   button.style.backgroundColor = "red";
// });

const button = document.querySelector("button");

button.addEventListener("dblclick", (event) => {
  console.log("+");

  event.target.style.backgroundColor = "red";
});
