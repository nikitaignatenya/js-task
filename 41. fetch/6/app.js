// 6. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://dog.ceo/api/breeds/image/random, получала от сервера ответ со случайной
// фотографией собаки и отображала это изображение на странице.

const button = document.createElement("button");
button.textContent = "Button";
document.querySelector("body").appendChild(button);
button.addEventListener("click", async () => {
  const getInf = await fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
  });
  const resInf = await getInf.json();
  const img = document.querySelector("img");
  img.src = resInf.message;
  document.querySelector("body").appendChild(img);

  console.log(resInf.message);
});
