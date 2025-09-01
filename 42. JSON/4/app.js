// 4. Создай поле для названия задачи, поле для числа, чекбокс - поле complited (создается как input type
// checkbox) и кнопку "Добавить задачу". По клику на кнопку отправь POST-запрос на
// https://jsonplaceholder.typicode.com/todos со структурой: { "title": ..., "completed": ... (true/ false, значение
// из чекбокса), "userId": ... } Результат создания отобразить в html

document.querySelector("button").addEventListener("click", async () => {
  const obj = {
    title: document.querySelector(".name").value,
    completed: document.querySelector(".check").checked,
    userId: document.querySelector(".number").value,
  };
  const postInf = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const resInf = await postInf.json();
  console.log(resInf);
  document.querySelector(
    "ul"
  ).innerHTML = `<li>${resInf.title}</li><li>${resInf.completed}</li><li>${resInf.userId}</li>`;
});
