// let a = Math.floor(Math.random() * 10);

// console.log(Math.pow(a, 2));

let a = [];
let b = Math.floor(Math.random() * 10);

for (let i = 0; i <= 10; i++) {
  b == i ? a.push(b * i) : null;
}

console.log(a.join(""));
