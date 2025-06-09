let a = [2, 4, 6, 8];

const res = a.reduce(function (mid, el) {
  return (mid += el);
}, 0);

console.log(res / a.length);
