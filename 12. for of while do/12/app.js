let a = [];
let b = [];

for (let i = 0; i < 6; i++) {
  a.push(prompt());
  a[i][0] == "1" || a[i][0] == "2" || a[i][0] == "5" ? b.push(a[i]) : null;
}

console.log(b);
