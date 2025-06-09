let a = ["apple", "kiwi", "banana"];
let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
  b.push(a[i].length);
  b.sort();
}
for (let l = 0; l < b.length; l++) {
  for (let j = 0; j < b.length; j++) {
    if (b[l] == a[j].length) {
      c.push(a[j]);
    }
  }
}
console.log(b);
console.log(c);
