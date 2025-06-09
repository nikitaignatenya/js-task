let a = [7, 1, 7, 3, 7, 5];
let b = 0;

for (let i = 0; i < a.length; i++) {
  a[i] == 7 ? (b += 1) : null;
}

console.log(b);
