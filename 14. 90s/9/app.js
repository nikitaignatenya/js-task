let a = +prompt();
let b = +prompt();

!isNaN(a) && !isNaN(b) && Number.isInteger(a) && Number.isInteger(b)
  ? console.log(a + b)
  : console.log(null);
