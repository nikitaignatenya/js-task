// 8. Создай поля для name и email, и кнопку "Создать пользователя". При клике на кнопку отправь
// POSTзапрос на https://reqres.in/api/users и выведи ID и дату создания. Добавить валидацию на ввод

document.querySelector("button").addEventListener("click", async () => {
  try {
    if (!document.querySelector(".email").value)
      throw new Error("пустая почта");
    if (!document.querySelector(".name").value)
      throw new Error("пустое имя   ");
    const obj = {
      name: document.querySelector(".name").value,
      email: document.querySelector(".email").value,
    };
    const postinf = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const resInf = await postinf.json();
    console.log(resInf);
  } catch (er) {
    console.log(er);
  }
});
