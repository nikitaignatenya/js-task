let a = [];
for (let i = 0; i < 3; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.reduce(function (sum, el) {
  if (el > sum) {
    return (sum = el);
  }
}, -Infinity);

console.log(res);
