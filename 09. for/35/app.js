let a = [1, 3, 6, 8, 9, 12];
let result = 0;

for (let i = 0; i < a.length; i++) {
  a[i] % 3 == 0 ? (result += +a[i]) : result !== 0;
}

console.log(result);
