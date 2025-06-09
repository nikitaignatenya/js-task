let a = [];
let b = +prompt();
for (let i = 0; i < b; i++) {
  a.push(+prompt());
}
console.log(a);

const res = a.some(function (el) {
  if (el > 0) {
    return true;
  } else return false;
});

console.log(res);
