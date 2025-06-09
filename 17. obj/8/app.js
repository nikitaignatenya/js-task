let obj = { a: 1, b: 2, c: 3 };
let num = 0;

for (let key in obj) {
  num++;
}

console.log(num);
