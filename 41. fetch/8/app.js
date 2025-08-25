// 8. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://official-joke-api.appspot.com/random_joke, получала от сервера случайную шутку в
// формате JSON и отображала её на странице в удобочитаемом виде.

const button = document.createElement("button");
button.textContent = "Button";
document.querySelector("body").appendChild(button);

button.addEventListener("click", async () => {
  const getInf = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
    { method: "GET" }
  );
  const resInf = await getInf.json();
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  p.textContent = resInf.setup;
  p1.textContent = resInf.punchline;
  document.querySelector("body").appendChild(p);
  document.querySelector("body").appendChild(p1);
});
