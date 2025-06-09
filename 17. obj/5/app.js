let obj = { 1: "a", 3: "b", 4: "c" };

let a = [];

for (let key in obj) {
  if (!isNaN(key) && key % 2 !== 0) {
    a.push(key);
  }
}

console.log(a);
