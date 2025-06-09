let a = [2, 2, 3, 3, 4, 3, 3, 4, 4, 5];
let b = [];
let d = [];
let f = [];
let g = [];
for (let el of a) {
  !b.includes(el) ? b.push(el) : null;
}
for (let i of b) {
  let c = [];
  c.push(i);
  d.push(c);
}

for (let el of a) {
  for (let l of d) {
    l[0] == el ? l.push(el) : null;
  }
}
for (let l of d) {
  f.push(l.length);
  f = f.sort();
}

console.log(d);
console.log(f);
console.log(g);
