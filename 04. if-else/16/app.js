let num1 = +prompt("Введите первое число ");
// let num2 = +prompt("Введите второе число");

if (num1 >= 0 && num1 <= 18) {
  console.log("Детство");
} else if (num1 >= 19 && num1 <= 40) {
  console.log("Молодость");
} else if (num1 >= 41 && num1 <= 100) {
  console.log("Зрелость");
} else {
  console.log("некорректный ввод");
}
