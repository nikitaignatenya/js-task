let a = [1, null, 2, undefined, 3];

const res = a.filter(function (el) {
  if (el !== null && el !== undefined) return true;
  else return false;
});

console.log(res);
var num_1 = 0;
console.log(num_1);


