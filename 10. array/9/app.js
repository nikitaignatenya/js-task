let a = [];

for (let i = 0; i < 10; i++) {
  a.push(prompt());
}

let b = [];

for (let i = 0; i < a.length; i++) {
  a[i][0] == 1 || a[i][0] == 2 || a[i][0] == 5 ? b.push(a[i]) : null;
}

console.log(b);
