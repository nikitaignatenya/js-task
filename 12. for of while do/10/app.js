let a = [-1, 2, 3, -4, 5];
let b = 0;

for (let el of a) {
  el > 0 ? (b += el) : null;
}

console.log(b);
