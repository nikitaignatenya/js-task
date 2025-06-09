let a = 1234;

a = String(a).split("");
const b = a.map(function (el) {
  return (el = Number(el));
});

const res = b.reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res);
