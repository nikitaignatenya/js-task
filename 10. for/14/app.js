let n = +prompt();
let a = 10;
let b = "";
let result = "";

for (let i = 0; i < a; i += 1) {
  b += "*";
}
for (let i = 0; i < n; i += 1) {
  result += `${b}\n`;
}
console.log(result);
