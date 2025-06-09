let a = [1, 2];
let b = [2, 3];
let c = [];

let i = 0;

while (i < a.length) {
  if (!c.includes(a[i])) {
    c.push(a[i]);
  }
  i++;
}
console.log(c);

let l = 0;
while (l < b.length) {
  if (!c.includes(b[l])) {
    c.push(b[l]);
  }
  l++;
}
