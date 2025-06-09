let a = [];
for (let i = 0; i < 3; i++) {
  a.push(prompt());
}
console.log(a);

const res = a.reduce(function (sum, el) {
  if (!isNaN(el)) {
    return (sum += 1);
  } else return (sum += 0);
}, 0);

console.log(res);
