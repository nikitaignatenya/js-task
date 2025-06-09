let a = 1234;
a = String(a).split("");

const res = a.map(function (el) {
  return Number(el);
});
console.log(res);
