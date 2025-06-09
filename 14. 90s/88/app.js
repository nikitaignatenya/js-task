let a = [1, 3, 6, 7, 9];

const res = a.reduce(function (sum, el) {
  if (el % 3 == 0) return (sum += el);
  else return (sum += 0);
}, 0);

console.log(res);
