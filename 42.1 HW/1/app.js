// Создай интерфейс для добавления нового поста. Включает:
// • Поле ввода "Заголовок поста"
// • Текстовую область "Текст поста"
// • Поле ввода "ID автора" (числовое, значение по умолчанию 1)
// • Кнопку "Опубликовать пост"
// По клику на кнопку отправь данные методом POST на https://jsonplaceholder.typicode.com/posts
// Body – { title: …, body: …, userId: … }
// После успешного создания:
// 1. Покажи зеленое уведомление об успехе
// 2. Очисти все поля ввода
// 3. Добавь созданный пост в список ниже
// 4. Увеличь счетчик созданных постов
// 5. Через 4 секунды скрой уведомление

let i = 0;

document.querySelector("button").addEventListener("click", async () => {
  const title = document.querySelector(".title");
  const text = document.querySelector(".text");
  const number = document.querySelector(".number");
  const obj = {
    title: title.value,
    body: text.value,
    userId: "Nikita",
  };
  const postInf = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const resinf = await postInf.json();
  function create() {
    i += 1;
    document.querySelector("h4").textContent = `Создано постов: ${i}`;
    const notion = document.querySelector(".notion");
    notion.style = "display: block;";
    notion.textContent = `Пост ${title.value} успешно создан`;
    const post = document.querySelector(".post");
    post.style = "display: flex; ";
    const now = new Date();
    post.innerHTML += `<div class="cont"><h3>${title.value}</h3><p>${
      text.value
    }</p><p>Автор: ${resinf.userId}    ID: ${
      resinf.id
    }   ${now.toLocaleTimeString()}</p></div>`;
    console.log(resinf);
    function deleteNot() {
      notion.style = "display: none;";
    }
    setTimeout(deleteNot, 4000);
  }
  for (let i = 0; i < +document.querySelector(".number").value; i++) {
    create();
  }
  title.value = null;
  text.value = null;
});
