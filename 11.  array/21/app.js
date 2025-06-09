let a = [10, 20, 30, 40];
let b = 0;

for (let i = 0; i < a.length; i++) {
  a.includes(a[i]) ? (b += 1) : null;
  // a[i] = 1;
  // b += +a[i];
}
console.log(b);
