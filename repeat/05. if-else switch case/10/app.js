let a = prompt();

!isNaN(a) && a !== null && a !== undefined
  ? console.log(Math.floor(a / 100))
  : console.log("Не число");
