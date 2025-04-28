let num1 = prompt("");
let num2 = prompt("");

if (!isNaN(num1) && !isNaN(num2)) {
  console.log("I am", num1 + num2);
} else {
  console.log("Не число");
}
