let num1 = +prompt("Введите количество минут");
let num2 = num1 / 60;

if (num1 % 60 === 0) {
  console.log(Math.floor(num2), "часа", (num1 %= 60), "минут");
} else {
  console.log(Math.floor(num2), "часа", (num1 %= 60), "минут");
}
