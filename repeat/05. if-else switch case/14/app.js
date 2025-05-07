let a = +prompt();
let b = +prompt();
let c = +prompt();

a + b > c && a + c > b && b + c > a && a == b && b == c && c == a
  ? console.log("Равносторонний")
  : a + b > c && a + c > b && b + c > a && (a == b || b == c || c == a)
  ? console.log("равнобедренный")
  : a !== b && b !== c && c !== a && a + b > c && a + c > b && b + c > a
  ? console.log("Разносторонний")
  : console.log("Треугольник не существует");
