// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.

const click = document.querySelector("button");

click.addEventListener("click", () => {
  const val = document.querySelector("input");
  try {
    let arr = [0, 1];
    if (isNaN(val.value)) throw new Error("Не числО");
    for (let i = 1; i < val.value - 1; i++) {
      arr.push(arr[i] + arr[i - 1]);
    }
    alert(arr);
  } catch (error) {
    console.log(error);
  }
});
