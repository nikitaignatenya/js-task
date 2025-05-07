let a = prompt();

a >= 0 && a <= 59
  ? console.log("F")
  : a >= 60 && a <= 69
  ? console.log("D")
  : a >= 70 && a <= 79
  ? console.log("C")
  : a >= 80 && a <= 89
  ? console.log("B")
  : a >= 90 && a <= 100
  ? console.log("A")
  : console.log("Неверный ввод");
