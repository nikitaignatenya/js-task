// 10. Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  try {
    if (input.value !== input.value.split("").reverse().join(""))
      throw new Error("Не палиндром");
    alert("Палиндром");
  } catch (error) {
    alert(error);
  }
});
