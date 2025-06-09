let a = [3, 6, 9];
const res = a.reduce(function (sum, el) {
  return (sum += +el);
}, 0);
console.log(res);
