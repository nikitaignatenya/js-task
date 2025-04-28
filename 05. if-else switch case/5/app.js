let num = prompt("Число");

if (isNaN(num)) {
  console.log(Math.sqrt(num));
} else if (!Number.isInteger(num)) {
  console.log(Math.round(Math.sqrt(num)));
}

let num1 = prompt("Число");

isNaN(num1)
  ? console.log(!Number.isInteger(num1))
  : console.log(Math.round(Math.sqrt(num1)));
