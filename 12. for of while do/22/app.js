let a = [1, 2.5, 3, 4.8, 5];
let b = [];

for (let el of a) {
  Number.isInteger(el) ? b.push(el) : null;
}

console.log(b);
