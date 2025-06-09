let a = [2, 3, 4, 5];
let b = 1;

for (let i = 0; i < a.length; i++) {
  b *= a[i];
}
console.log(b);

let l = 0;
let c = 1;
while (l < a.length) {
  c *= a[l];
  l++;
}
console.log(c);

let r = 1;
for (let el of a) {
  r *= el;
}

console.log(r);
