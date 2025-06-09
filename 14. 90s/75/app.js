let a = "1, 2, 3".split(" ");

const res = a.map(function (el) {
  return Number(el.slice(0, 1));
});

console.log(res);
