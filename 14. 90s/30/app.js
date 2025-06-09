let a = [1, 3, 4, 5];

const res = a.filter(function (el) {
  if (el % 2 !== 0) return true;
  else return false;
});

const res2 = res.reduce(function (sum, el) {
  return (sum *= el);
}, 1);
console.log(res2);
