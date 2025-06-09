let obj = { product1: 10, product2: 5, product3: 8 };
const arr = Object.values(obj);

const res = arr.reduce(function (sum, el) {
  return (sum += +el);
}, 0);

console.log(res);
