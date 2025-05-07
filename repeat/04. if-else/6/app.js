let a = prompt();
let b = prompt();

a > 0 && b < 0
  ? console.log("Противоположные")
  : a < 0 && b > 0
  ? console.log("Противоположные")
  : console.log("Не противоположные");
