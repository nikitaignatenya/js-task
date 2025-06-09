let a = prompt().split(" ");

const b = a.map(function (el) {
  return el.split("").reverse().join("");
});

console.log(b.join(" "));
