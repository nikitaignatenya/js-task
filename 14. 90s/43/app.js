let a = "abc";
a = a.split("");

const b = a.map(function (el) {
  return (el = "*");
});

console.log(b.join(""));
