let num1 = +prompt("первое");
let num2 = +prompt("Второе");

if (num1 % num2 == 0 || num2 % num1 == 0) {
  console.log("Делится без остатка");
} else {
  console.log("Делится с остатком");
}
