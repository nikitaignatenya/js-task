let num = prompt();

num % 2 == 0 && !isNaN(num)
  ? console.log(`Число ${num} является чётным`)
  : isNaN(num)
  ? console.log("Не  число")
  : console.log(`Число ${num} является нечётным`);
