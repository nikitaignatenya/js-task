let a = [1, 2, 3, 4];

const res = a.filter(function (el) {
  if (el % 2 == 0) return true;
  else return false;
});

const res2 = res.reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res2);
