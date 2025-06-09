let a = prompt();
let result = 0;
let b = ["a", "e", "i", "o", "u"];

for (let i = 0; i < a.length; i++) {
  for (let l = 0; l < b.length; l++) {
    a[i] == b[l] ? (result += 1) : result !== 0;
  }
}

console.log(result);
