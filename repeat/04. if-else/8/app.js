let a = prompt();
let b = prompt();

a % b == 0
  ? console.log(`Делится ${a / b}`)
  : console.log(`Делится с остатком, остаток = ${a % b}`);
