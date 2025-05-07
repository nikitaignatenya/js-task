let a = prompt();
let b = prompt();

!isNaN(a) && !isNaN(b)
  ? console.log(`I'm ${+a + +b}`)
  : console.log("Неверный ввод");
