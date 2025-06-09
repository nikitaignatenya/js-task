let a = [10, 20, 30, 40];
let b = 0;

for (let i = 0; i < a.length; i++) {
  b += +a[i];
}
console.log(b / a.length);
