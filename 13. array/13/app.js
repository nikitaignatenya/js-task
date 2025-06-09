let n = +prompt();
let arr = [];

while (arr.length < n) {
  arr.push(prompt());
}

const doubleNum = arr.map(function (el) {
  return el ** 2;
});

console.log(doubleNum);
