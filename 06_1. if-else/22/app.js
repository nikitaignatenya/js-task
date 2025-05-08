let num = prompt();

!isNaN(num) && num > 0
  ? console.log(Math.ceil(num))
  : isNaN(num)
  ? console.log("Не число")
  : console.log(Math.floor(num));
