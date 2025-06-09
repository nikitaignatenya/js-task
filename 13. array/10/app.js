let n = +prompt();
let arr = [];

while (arr.length < n) {
  arr.push(prompt());
}

let c = [];
arr.forEach(function (el) {
  if (isNaN(el) && el.includes("javascript")) {
    c.push(el);
  }
});

console.log(c);
