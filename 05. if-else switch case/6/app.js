let num1 = +prompt("Скорость 1");
let num2 = +prompt("Скорость 2");
let num3 = +prompt("Расстояние");

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  console.log(num3 / (num1 + num2));
} else {
  console.log("error");
}

!isNaN(num1) && !isNaN(num2) && !isNaN(num3)
  ? console.log(num3 / (num1 + num2))
  : console.log("error");
