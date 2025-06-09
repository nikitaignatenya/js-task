let a = [1, 2, 4, 5];

const b = a.filter(function (el) {
  if (el % 2 == 0) return true;
  else return false;
});

console.log(b.length);
