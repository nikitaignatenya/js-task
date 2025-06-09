let a = ["a", 1, "c"];

const res = a.every(function (el) {
  if (typeof el == "string") {
    return true;
  } else return false;
});

console.log(res);
