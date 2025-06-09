let a = [5, 12, 25, 15, 8];

const b = a.filter(function (el) {
  if (el >= 10 && el <= 20) return true;
  else return false;
});

console.log(b.sort());
