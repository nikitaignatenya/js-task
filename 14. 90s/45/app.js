let a = prompt().split(" ");

const b = a.map(function (el) {
  return el[0];
});
console.log(b.join(""));
