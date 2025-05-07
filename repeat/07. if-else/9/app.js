let num1 = prompt();
let num2 = prompt();

!isNaN(num1) && !isNaN(num2)
  ? console.log(Math.random(num1, num2))
  : console.log("Не число");
