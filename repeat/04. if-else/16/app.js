let a = +prompt();

a >= 0 && a <= 18
  ? console.log("Детство")
  : a <= 40 && a >= 19
  ? console.log("Молодость")
  : a >= 41 && a <= 100
  ? console.log("Зрелость")
  : console.log("Неверный ввод");
