// 5. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.nationalize.io/?name=... чтобы отправить GET-запрос и получить от сервера
// информацию о странах, с которыми это имя ассоциируется чаще всего, включая вероятность
// для каждой страны.

const button = document.createElement("button");
button.textContent = "BUTTON";
const input = document.createElement("input");
document.querySelector("body").appendChild(button);
document.querySelector("body").appendChild(input);
button.addEventListener("click", async () => {
  console.log(input.value);
  const inf = await fetch(`https://api.nationalize.io/?name=${input.value}`);
  const resInf = await inf.json();
  console.log(resInf);
});
