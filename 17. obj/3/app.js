let obj = { a: 1, b: "2", c: 3 };
let a = [];

for (let key in obj) {
  if (typeof obj[key] == "number") {
    a.push(obj[key]);
  }
}

console.log(a);
