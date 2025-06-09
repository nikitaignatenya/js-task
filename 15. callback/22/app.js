let a = [];
for (let i = 0; i < 3; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.map(function (el) {
  return (el *= el);
});

console.log(res);
