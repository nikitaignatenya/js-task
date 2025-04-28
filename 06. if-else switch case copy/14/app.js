let num1 = prompt();
let num2 = prompt();

num1 == num2
  ? console.log('Равны')
  : Math.max(num1, num2) == num1
  ? console.log(num1)
  : console.log(num2);
