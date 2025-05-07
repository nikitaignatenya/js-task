let a = prompt();
let b = prompt();

!isNaN(a) && !isNaN(b) && a % b == 0
  ? console.log("Кратно")
  : console.log("Не кратно");
