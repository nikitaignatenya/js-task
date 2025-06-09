let a = [3, -1, 5, -9, 0];
let b = [];

for (let i = 0; i < a.length; i++) {
  a[i] < 0 ? (a[i] = 0) : null;
  b.push(a[i]);
}

console.log(b);
