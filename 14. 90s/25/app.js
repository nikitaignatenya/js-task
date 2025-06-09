let a = [1, 2, 3];

const res = a.map(function (el) {
  return (el *= 2);
});

const res2 = res.reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res2);
