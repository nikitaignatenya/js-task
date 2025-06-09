let a = [
  1, 1, 2, 2, 3, 3, 3, 4, 2, 2, 4, 4, 4, 5, 5, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
];
let b = [];
let c = [];
let d = [];
let r = [];
let q = "";
a = a.sort();
let result = 0;

for (let i = 0; i < a.length; i++) {
  !b.includes(a[i]) ? b.push(a[i]) : null;
}
for (let j = 0; j < b.length; j++) {
  b[j] = [b[j]];
  for (let l = 0; l < a.length; l++) {
    if (b[j][0] == a[l]) {
      b[j] += [a[l]];
    }
  }
}
q = q.split(" ");

for (let k = 0; k < b.length; k++) {
  c.push(b[k].length);
  c = c.sort();
}

for (let f = 0; f < c.length; f++) {
  for (let g = 0; g < c.length; g++) {
    if (c[f] == b[g].length) {
      d.push(b[g]);
    }
    for (let t = 0; t < d.length; t++)
      if (!r.includes(d[t])) {
        r.push(d[t]);
      }
  }
}
for (let y = 0; y < r.length; y++) {
  q += ` ${r[y].slice(0, r[y].length - 1)} `;
}

console.log(b);
console.log(c);
console.log(d);
console.log(r);
console.log(`q = ${q}`);
