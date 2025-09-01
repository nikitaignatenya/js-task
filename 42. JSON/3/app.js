// 3. Создай 2 поля для ввода текста, 1 для ввода числа и кнопку "Создать". При клике на кнопку
// отправь POST-запрос на https://jsonplaceholder.typicode.com/posts со следующей структурой
// данных: { "title": ... "body": ..., "userId": ... }. Результат создания отобразить в html

// const button = document.querySelector("button");
// const firsInp = document.querySelector(".firstInp");
// const secondInp = document.querySelector(".secondInp");
// const thirdInp = document.querySelector(".thirdInp");

// button.addEventListener("click", async () => {
//   const obj = {
//     title: firsInp.value,
//     body: secondInp.value,
//     userID: thirdInp.value,
//   };

//   const postInf = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
//   const json = await postInf.json();
//   const div = document.querySelector(".container");
//   div.innerHTML = `<ul><li>${json.title}</li><li>${json.body}</li><li>${json.userID}</li></ul>`;
// });
