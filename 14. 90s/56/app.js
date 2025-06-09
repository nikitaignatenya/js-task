let a = [1, 2, 3];

const b = a.map(function (el) {
  if (el % 2 !== 0) return "odd";
  else return "even";
});
console.log(b);
