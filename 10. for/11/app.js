let a = [5, 12, 7, 9, 14];

let b = 0;

for (let i = 0; i < a.length; i++) {
  a[i] > b ? (b = a[i]) : b != a[i];
}

console.log(b);
