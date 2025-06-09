let a = [];
let b = 0;

for (let i = 0; i < 10; i++) {
  a.push(prompt());
  a[i].n > b.n ? (b.n = a[i].n) : null;
}

console.log(b);
