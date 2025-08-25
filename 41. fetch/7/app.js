// 7. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://api.ipify.org?format=json, получала от сервера ответ с вашим текущим IP-адресом
// и отображала его на странице.

const button = document.createElement("button");
button.textContent = "Button";
document.querySelector("body").appendChild(button);

button.addEventListener("click", async () => {
  const getInf = await fetch("https://api.ipify.org?format=json", {
    method: "GET",
  });
  const resInf = await getInf.json();
  const p = document.createElement("p");
  p.textContent = resInf.ip;
  document.querySelector("body").appendChild(p);
});
