let a = ["hi", "hello", "ok", "world"];

const b = a.filter(function (el) {
  if (el.length > 3) return true;
  else return false;
});

console.log(b.length);
