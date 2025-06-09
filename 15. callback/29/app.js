let a = [];
let b = +prompt();
for (let i = 0; i < b; i++) {
  a.push(prompt());
}
console.log(a);

const res = a.map(function (el) {
  return el.toUpperCase();
});
console.log(res);
