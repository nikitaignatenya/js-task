let a = prompt();

!isNaN(a) && a > 0
  ? console.log("Положительное")
  : !isNaN(a) && a == 0
  ? console.log("Ноль")
  : console.log("Отрицательное");
