let a = [3, -3, 2, -2, 1];

const b = a.map(function (el) {
  return (el = Math.abs(el));
});

const res = b.filter(function (el, i, arr) {
  if (arr.indexOf(el) === i) return true;
});

console.log(res.sort());
