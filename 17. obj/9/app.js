let obj = { x: "hello", y: 20, z: 30 };
let num = 0;
for (let key in obj) {
  if (typeof obj[key] == "number") {
    num++;
  }
}

console.log(num);
