let a = prompt();
let b = prompt();

a > b
  ? console.log(a)
  : a === b
  ? console.log("Равны")
  : isNaN(a) && isNaN(b)
  ? console.log("не числа")
  : console.log(b);
