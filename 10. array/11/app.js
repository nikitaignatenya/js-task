let a = [];
let result = "-";

for (let i = 0; i < 10; i++) {
  a.push(prompt());
  result += `${a[i]}-`;
}

console.log(result);
