let num = prompt("СМ");

num /= 100;

!isNaN(num) ? console.log(Math.floor(num)) : console.log("Вы ввели не число");
