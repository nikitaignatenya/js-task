let a = [1, -2, 3];
const res = a.some(function (el) {
  if (el < 0) return true;
  else return false;
});

console.log(res);
