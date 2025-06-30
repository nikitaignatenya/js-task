// 6. По нажатию на кнопку создайте и покажите изображение с заданным src

const button = document.querySelector("button");
const image = document.createElement("img");
image.style.width = "200px";
image.style.margin = "50px";
image.src = `./img/5fd531dca6427c7_upscaled.jpeg`;
document.body.appendChild(image);

button.addEventListener("click", () => {
  image.src = `./img/milye-kotiki-16.webp`;
});
