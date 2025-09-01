// 2. Создай поле для для ввода текста и кнопку "Создать". При клике на кнопку отправь POST-запрос
// на https://jsonplaceholder.typicode.com/posts со следующей структурой данных в body: { "title":
// "Введенный заголовок", "body": ..., "userId": 1 }

const button = document.querySelector("button");
const input = document.querySelector("input");

const obj = {
  title: "Hi",
  body: "hello friends",
  userId: 1,
};

button.addEventListener("click", async () => {
  const postInf = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const json = await postInf.json();
  console.log(json);
});
