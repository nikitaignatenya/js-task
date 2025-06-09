let n = +prompt();
let arr = [];
let resultNumber = [];
let resultString = [];

while (arr.length < n) {
  arr.push(prompt());
}

arr.forEach(function (el) {
  if (isNaN(el)) {
    resultString.push(el);
  } else {
    resultNumber.push(el);
  }
});

console.log(resultNumber, resultString);
