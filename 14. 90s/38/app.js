let a = "Hello big world";
a = a.split(" ");

const b = a.map(function (el) {
  return el.slice(0, 1);
});

console.log(b.join(""));
