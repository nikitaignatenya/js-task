let num = prompt("Number");

num = 1 / num;
!isNaN(num)
  ? console.log(num / 1)
  : num === 0
  ? console.log("Обратного числа не существует")
  : console.log("Не число");
