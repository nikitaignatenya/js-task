let n = +prompt();
let arr = [];
let result = "";

while (arr.length < n) {
  arr.push(prompt());
}

arr.forEach(function (el) {
  if (isNaN(el)) {
    result += ` #${el}`;
  }
});

const addSym = arr.map(function (el) {
  return ` #` + el;
});

console.log(result);
console.log(addSym);
