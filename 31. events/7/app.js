// 7. Записать в результат удвоенное значение инпута. Добавить проверки

const click = document.querySelector("button");

click.addEventListener("click", () => {
  try {
    const val = document.querySelector("p");
    if (isNaN(val.textContent)) throw new Error("Не число");
    val.textContent *= 2;
  } catch (error) {
    console.log(error);
  }
});
