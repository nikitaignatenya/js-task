let num = +prompt("Проверка числа на последний знак");

if (num % 2 === 0 && num % 10 === 0) {
  console.log("Оканчивается на 0");
} else {
  console.log("Не оканчивается на 0");
}
