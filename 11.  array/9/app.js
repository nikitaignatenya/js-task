let a = [1, 2, 3, 4, 5, 6];
let b = [];

for (let i = 0; i < a.length; i++) {
  a[i] % 2 == 0 ? b.push(a[i]) : null;
}

console.log(b);
