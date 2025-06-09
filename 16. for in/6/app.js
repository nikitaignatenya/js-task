let obj = { x: 5, y: 10, z: "abc" };

let a = [];

for (let key in obj) {
  if (typeof obj[key] == "number") {
    obj[key] *= 2;
  }
}

console.log(obj);
