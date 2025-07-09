// 6. Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе

const div = document.querySelector(".cont");
const reg = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i;
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const name1 = document.querySelector(".name");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  try {
    if (!reg.test(email.value)) throw new Error("Почта не валидна");
    if (name1.value.length == 0) throw new Error("Нет имени");
    if (password.value.length == 0) throw new Error("Нет пароля");
    const p = document.createElement("p");
    p.textContent = "Успешный вход";
    div.appendChild(p);
  } catch (error) {
    alert(error);
  }
});
