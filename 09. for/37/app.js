let a = prompt();
let result = 0;
let b = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < a.length; i++) {
  for (let l = 0; l < b.length; l++) {
    let c = b[l].toUpperCase();
    a[i] == b[l] || a[i] == c ? (result += 1) : result !== 0;
  }
}

console.log(result);
