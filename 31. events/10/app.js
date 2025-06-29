// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const lock = document.querySelector(".lock");
const free = document.querySelector(".free");
const val = document.querySelector("input");

lock.addEventListener("click", () => {
  val.disabled = true;
});
free.addEventListener("click", () => {
  val.disabled = false;
});
