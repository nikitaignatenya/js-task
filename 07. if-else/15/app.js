let num1 = prompt();
let num2 = prompt();

if (!isNaN(num1) && !isNaN(num2)) {
  console.log(`Умножение ` + String(+num1 * +num2));
  console.log(`Сложение ` + String(+num1 + +num2));
  console.log(`Деление ` + String(+num1 / +num2));
  console.log(`Вычетание ` + String(+num1 - +num2));
} else {
  console.log("Не числа");
}
