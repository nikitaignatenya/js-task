// При клике на кнопку текстовый блок появляется или скрывается.

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "КЛАЦ";
const p = document.createElement("p");
p.textContent = "ЯТУТ";
let val = true;
button.addEventListener("click", () => {
  if (val == true) {
    document.body.appendChild(p);
    val = false;
  } else {
    document.body.removeChild(p);
    val = true;
  }
});
