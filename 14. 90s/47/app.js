let a = [5, 15, 20];

const res = a.filter(function (el) {
  if (el > 10) return true;
  else return false;
});
console.log(res);

const res2 = res.reduce(function (mid, el) {
  return (mid += el);
}, 0);

console.log(res2 / res.length);
