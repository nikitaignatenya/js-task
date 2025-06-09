let a = "2,3,4";

a = a.split(",");

const res = a.map(function (el) {
  return Math.pow(Number(el), 2);
});

const res2 = res.reduce(function (sum, el) {
  return (sum += el);
});

console.log(res2);
