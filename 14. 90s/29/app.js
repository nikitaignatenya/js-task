let a = [0, 1, 0, 2, 0];
let b = [];

for (let i = 0; i < a.length; i++) {
  a[i] == 0 ? b.push(i) : null;
}

console.log(b);
