let a = [1, 0, 2, 0, 3];

const res = a.filter(function (el) {
  if (el == 0) return false;
  else return true;
});

console.log(res);
