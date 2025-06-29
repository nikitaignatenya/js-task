// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const click = document.querySelector("button");
let i = 0;
click.addEventListener("click", () => {
  const val = document.querySelector("input");
  i++;
  if (i % 2 == 0) {
    val.value = "!!!";
  } else {
    val.value = "???";
  }
});
