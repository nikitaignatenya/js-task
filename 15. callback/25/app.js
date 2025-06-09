let a = [];
let b = +prompt();
for (let i = 0; i < b; i++) {
  a.push(prompt());
}
console.log(a);

const res = a.every(function (el) {
  if (el.length > 3) return true;
  else return false;
});

console.log(res);
