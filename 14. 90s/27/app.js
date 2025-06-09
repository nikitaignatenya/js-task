let a = [3, 14, 9, 5];

const b = a.some(function (el) {
  if (el % 7 == 0) return true;
  else return false;
});
console.log(b);
