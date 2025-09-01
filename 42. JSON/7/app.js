// 7. Создай поле для ID пользователя и кнопку "Найти посты". При клике на кнопку отправь GET-запрос
// на https://jsonplaceholder.typicode.com/posts?userId={id} и выведи заголовки постов этого
// пользователя.

document.querySelector("button").addEventListener("click", async () => {
  const getInf = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${
      document.querySelector(".id").value
    }`
  );
  const resInf = await getInf.json();
  const res = resInf.filter(
    (el) => el.userId == document.querySelector(".id").value
  );
  res.forEach((el) => console.log(el.title));
});
