let num = +prompt("Введите оценку от 0 до 100");

if (num === 0 || (num > 0 && num < 60)) {
  console.log("F");
} else if (num > 59 && num < 70) {
  console.log("D");
} else if (num > 69 && num < 80) {
  console.log("C");
} else if (num > 79 && num < 90) {
  console.log("B");
} else if (num > 89 && num < 101) {
  console.log("A");
}
