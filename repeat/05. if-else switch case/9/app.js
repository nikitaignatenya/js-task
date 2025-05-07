let a = +prompt();

!isNaN(a) && a !== 0
  ? console.log(1 / a)
  : a === 0
  ? console.log("Обратного числа не существует")
  : console.log("Вы ввели не число");
