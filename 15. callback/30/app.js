let a = [];
let b = +prompt();
for (let i = 0; i < b; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.reduce(function (sum, el) {
  if (!isNaN(el) && el < sum) {
    return (sum = el);
  }
  return (sum += 0);
}, +Infinity);

console.log(res);
