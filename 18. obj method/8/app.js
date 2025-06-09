let num = +prompt();

num = String(num).split("");

const res = num.reduce(function (sum, el, i, arr) {
  return (sum += el ** i);
}, 0);

console.log(res);
