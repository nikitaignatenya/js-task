let num1 = +prompt("Введите первое число ");
// let num2 = +prompt("Введите второе число");

num1 = Math.sqrt(num1);

if (Number.isInteger(num1)) { 
  console.log(num1);
} else { 
  console.log(num1.toFixed(2));
}