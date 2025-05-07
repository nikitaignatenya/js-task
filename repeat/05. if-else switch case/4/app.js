let a = prompt();

isNaN(a) && a !== 0
  ? console.log("ВЫ ввели не число")
  : a > 0 && !isNaN(a)
  ? console.log(`Число ${a} положительное`)
  : a < 0 && !isNaN(a)
  ? console.log(`Число ${a} Отрицательное`)
  : console.log(`Число ${a} равно нулю`);
