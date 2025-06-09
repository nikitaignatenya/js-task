let a = "Hello world this is JavaScript".split(" ");

const res = a.filter(function (el) {
  if (el.length > 4) return true;
  else return false;
});

console.log(res.length);
