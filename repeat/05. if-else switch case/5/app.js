let a = prompt();

Number.isInteger(a)
  ? console.log(Math.sqrt(a))
  : isNaN(a)
  ? console.log("Не число")
  : (a = Math.sqrt(a)),
  console.log(Math.round(a));
