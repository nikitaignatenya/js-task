let a = [];
for (let i = 0; i < 3; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.every(function (el) {
  if (el % 2 == 0) {
    return true;
  } else return false;
});

console.log(res);
