// 5. Создай поле для ID пользователя, поле для email и кнопку "Обновить".
// При клике на кнопку отправь
// PUT-запрос на https://jsonplaceholder.typicode.com/users/{id} с новым email и
//  выведи результат.

document.querySelector("button").addEventListener("click", async () => {
  const inputId = document.querySelector(".id");
  const inputEmail = document.querySelector(".mail");
  const putInf = await fetch(
    `https://jsonplaceholder.typicode.com/users/${inputId.value}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: inputId.value,
        email: inputEmail.value,
      }),
    }
  );
  const resInf = await putInf.json();
  console.log(resInf);
});
