let obj = { 1: "a", 2: "b", name: "c" };
let a = [];
for (let key in obj) {
  if (!isNaN(key)) {
    a.push(key);
  }
}
console.log(a);
