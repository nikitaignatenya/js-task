let a = ["b", "a", "b", "c"];

const b = a.filter(function (el, i, arr) {
  if (arr.indexOf(el) == i) return true;
  else return false;
});
console.log(b.sort().join(","));
