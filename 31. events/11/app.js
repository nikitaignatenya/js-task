// По нажатию на кнопку поменять местами значения 2 инпутов

// const click = document.querySelector("button");

// click.addEventListener("click", () => {
//   const first = (document.querySelector(".first").style =
//     "background-color: green");
//   const second = (document.querySelector(".second").style =
//     "background-color: white");
//   let arr = [first, second];
//   first = arr[1];
//   second = arr[0];
// });

const click = document.querySelector("button");
let arr = ["background-color: black", "background-color: green"];

click.addEventListener("click", () => {
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  first.style = arr[1];
  second.style = arr[0];
  arr = arr.reverse();
});

