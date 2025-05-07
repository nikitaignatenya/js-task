let a = prompt();
let b = prompt();
let c = prompt();

let D = b ** 2 - 4 * a * c;

D > 0
  ? console.log(
      `Корни ${(-b + Math.sqrt(D)) / (2 * a)}, ${(-b - Math.sqrt(D)) / (2 * a)}`
    )
  : D == 0
  ? console.log(-b / (2 * a))
  : console.log("Не имеет действительных корней");
