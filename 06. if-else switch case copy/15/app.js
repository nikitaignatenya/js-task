let num1 = prompt();
let num2 = prompt();

num1 %= num2;

!isNaN(num1) == 0 ? console.log(`Кратно`) : console.log(`не кратно`);
