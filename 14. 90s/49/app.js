let a = "123456";

a = a.split("");

const res = a.filter(function (el) {
  if (el % 2 == 0) return true;
  else return false;
});
console.log(res);

const res3 = res.map(function (el) {
  return (el = Number(el));
});

const res2 = res3.reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res2);
