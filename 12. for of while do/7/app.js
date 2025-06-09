let a = [2, 5, 9, 15, 0, 4];
let b = [];
for (let el of a) {
  el % 3 == 0 ? b.push(el) : null;
}

console.log(b);
