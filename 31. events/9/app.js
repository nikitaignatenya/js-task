// 9. У вас есть кнопка. После каждого нажатия менять background
const click = document.querySelector("button");
let val = true;

click.addEventListener("click", () => {
  if (val === true) {
    click.style = "background-color: green";
    val = false;
  } else {
    click.style = "background-color: white";
    val = true;
  }
});
