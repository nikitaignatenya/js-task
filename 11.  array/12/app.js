let a = [];
let b = 0;

for (let i = 0; i < 10; i++) {
  a.push(+prompt());
  a[i] % 2 == 0 ? (b += 1) : null;
}

console.log(b);
