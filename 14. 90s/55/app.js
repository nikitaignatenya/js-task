let a = [1, 2, 2, 3, 1];
let b = [];

for (let i = 0; i < a.length; i++) {
  !b.includes(a[i]) ? b.push(a[i]) : null;
}

console.log(b.length);
