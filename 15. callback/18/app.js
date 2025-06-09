let a = [];
for (let i = 0; i < 3; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.reduce(function (sum, el) {
  return (sum *= el);
}, 1);

console.log(res);
