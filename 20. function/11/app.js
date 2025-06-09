let a = prompt();
let b = prompt();

const checkAnn = (first, second) =>
  first.split("").sort().join("") === second.split("").sort().join("")
    ? console.log(true)
    : console.log(false);

checkAnn(a, b);
