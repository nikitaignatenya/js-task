let obj1 = { a: 1, b: 2 };

console.log(Object.keys(obj1));

let obj2 = { x: 10, y: 20, z: 30 };

const res = Object.values(obj2).reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res);

let obj3 = { name: "Anna", age: 25 };
console.log(Object.entries(obj3));
