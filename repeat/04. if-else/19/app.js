let a = prompt();

let b = a / 60;

a % 60 == 0
  ? console.log(`${b} часа ${a % 60} минут`)
  : console.log(Math.floor(b) + " часа " + (a % 60) + " минут");
