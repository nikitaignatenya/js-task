let a = [3, -1, 5, -2];

const b = a.findIndex(function (el) {
  if (el < 0) return true;
  else return false;
});
console.log(b);
