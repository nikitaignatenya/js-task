let a = [1, 2, 1, 3, 2];
let b = [];

for (let i = 0; i < a.length; i++) {
  !b.includes(a[i]) ? b.push(a[i]) : null;
}

console.log(b);
