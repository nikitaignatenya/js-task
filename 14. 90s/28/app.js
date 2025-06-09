let a = [1, 2, 1, 3, 1];

const b = a.filter(function (el, i, arr) {
  if (el == 1) return true;
  else return false;
});
console.log(b.length);
