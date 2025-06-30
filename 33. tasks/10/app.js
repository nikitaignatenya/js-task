// 10. На странице есть форма с двумя полями ввода:
// • первое поле — email
// • второе поле — пароль
// • и кнопка "Войти".
// По клику на кнопку нужно:
// • проверить, что email написан правильно (с помощью регулярного выражения),
// • убедиться, что пароль не пустой и содержит не менее 8 символов.
// Если всё введено верно — выводите сообщение Успешный вход!
// Если есть ошибка — показывайте соответствующее сообщение об ошибке под формой.

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const regEmail = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i;
const button = document.querySelector("button");

button.addEventListener("click", () => {
  try {
    if (!regEmail.test(email.value)) throw new Error("Почта неверна");
    if (password.value.length == 0 || password.value.length < 8)
      throw new Error("Короткий пароль");
    const p = document.createElement("p");
    p.textContent = "Успешный вход";
    document.body.appendChild(p);
  } catch (error) {
    alert(error);
  }
});
