// 6. Создай поле для ID поста и кнопку "Удалить". При клике на кнопку отправь DELETE-запрос на
// https://jsonplaceholder.typicode.com/posts/{id} и выведи сообщение об успехе.

document.querySelector("button").addEventListener("click", async () => {
  const id = document.querySelector(".id");
  const delInf = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id.value}`,
    {
      method: "DELETE",
    }
  );
  const resDel = await delInf.json();
  console.log(resDel);
});
