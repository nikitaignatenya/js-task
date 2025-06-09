let a = "hello world";
a = a.split(" ");

const b = a.map(function (el) {
  return el.toUpperCase();
});

console.log(b.join("_"));
