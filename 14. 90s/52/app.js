let a = [-1, 2, -4];

const b = a.some(function (el) {
  if (el < 0 && el % 2 !== 0) return true;
  else return false;
});

console.log(b);
