let a = [1, "a", 2, "b"];

const res = a.filter(function (el) {
  if (typeof el == "string") return true;
  else return false;
});

console.log(res);
