let a = [3, -2, -5, 7];

const b = a.filter(function (el) {
  if (el < 0) return true;
  else return false;
});

console.log(b.length);
