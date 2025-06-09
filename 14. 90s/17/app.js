let a = [5, 2, 8, 1];

const res = a.reduce(function (max, el) {
  if (el > max) {
    return (max = el);
  } else return max;
}, -Infinity);

console.log(res);

const res2 = a.reduce(function (max, el) {
  return Math.max(max, el);
}, -Infinity);

console.log(res2);
