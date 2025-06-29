// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const click = document.querySelector("button");

click.addEventListener("click", () => {
  try {
    const val = document.querySelector("input");
    if (val.value.length == 0) throw new Error("Пусто");
    if (!isNaN(val.value) && val.value !== null) throw new Error("Нужен текст");
    alert(val.value);
  } catch (error) {
    alert(error);
  }
});
