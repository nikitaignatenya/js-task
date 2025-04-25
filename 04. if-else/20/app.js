let num1 = +prompt("Введите количество лет собаки");
let num2 = 10.5 * num1;
let num3 = (num1-2) * 4;

if (num1 <= 2 && num1 >= 0) {
  console.log(num2);
} else if (num1 > 2) {
  console.log(21 + num3);
}
