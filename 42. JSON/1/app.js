// 1. Создай кнопку "Загрузить посты". При клике на кнопку сформируй GET-запрос на
// https://jsonplaceholder.typicode.com/posts и выведи список заголовков постов.

const body = document.querySelector("body");
const button = document.createElement("Button");
button.textContent = "Загрузить посты";
body.appendChild(button);

button.addEventListener("click", async () => {
  const getInf = await fetch("https://jsonplaceholder.typicode.com/posts", {
    mhetod: "GET",
  });
  const resInf = await getInf.json();
  console.log(resInf);

  const ul = document.createElement("ul");
  resInf.forEach((el) => {
    ul.innerHTML += `<li>${el.title}</li>`;
  });
  body.appendChild(ul);
});
