let a = [1, 2, 2, 3, 4, 4, 3, 4, 5];

let b = [];

for (let el of a) {
  !b.includes(el) ? b.push(el) : null;
}

console.log(b);
