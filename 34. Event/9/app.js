// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// // возвращается первая картинка

const img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.src = "./img/milye-kotiki-16.webp";
});

img.addEventListener("mouseout", () => {
  img.src = "./img/5fd531dca6427c7_upscaled.jpeg";
});
