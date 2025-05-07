let a = prompt();

a % 3 == 0
  ? console.log(true)
  : isNaN(a) || a == null
  ? console.log("Не число")
  : console.log(false);
