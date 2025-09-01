// 9. Создай поля для ID, name, email и кнопку "Обновить". При клике на кнопку отправь PUT-запрос на
// https://reqres.in/api/users/{id}, в тело передай name, email и выведи в html результат -
// полные данные пользователя.

document.querySelector("button").addEventListener("click", async () => {
  const id = document.querySelector(".id");
  const obj = {
    id: document.querySelector(".id").value,
    name: document.querySelector(".name").value,
    email: document.querySelector(".email").value,
  };
  const putInf = await fetch(`https://reqres.in/api/users/${id.value}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  const resPut = await putInf.json();
  console.log(resPut);
});
