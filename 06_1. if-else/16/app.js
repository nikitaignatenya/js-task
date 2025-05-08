let num = prompt();

num = Number(num);

if (num > 0) {
  console.log("Положительное");
} else if (num == 0) {
  console.log("равно нулю");
} else if (isNaN(num)) {
  console.log("Не число");
} else {
  console.log("Отрицательное");
}
