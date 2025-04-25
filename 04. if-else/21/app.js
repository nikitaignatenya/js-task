let a = +prompt("первое число");
let b = +prompt("второе число");
let c = +prompt("третье число");

let D = b ** 2 - 4 * a * c;

if (!a == 0 && D > 0) {
  console.log("Первый корень х", (-b + Math.sqrt(D)) / (2 * a));
  console.log("Второй корень х", (-b - Math.sqrt(D)) / (2 * a));
} else if (!a == 0 && D === 0) {
  console.log("Единственный корень", -b / (2 * a));
}
