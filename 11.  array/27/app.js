let a = [10, 15, 20, 25, 30];
let b = [];

for (let i = 0; i < a.length; i++) {
  a[i] % 2 == 0 ? b.push(a.indexOf(a[i])) : null;
}
console.log(b);
