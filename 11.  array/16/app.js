let a = [];
let b = 0;

for (let i = 0; i < 10; i++) {
  a.push(prompt());
  b += +a[i];
}

console.log(b);
