let a = [];
let b = [];
let c = 0;

for (let i = 0; i < 4; i++) {
  a.push(prompt());
  // a[i] % 2 == 0 ? (b += 1) : null;
  if (a[i] % 2 !== 0) {
    continue;
  } else {
    a[i] = 1;
    c += +a[i];
  }
}
console.log(c);
