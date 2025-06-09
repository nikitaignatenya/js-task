let obj = {};
let num = +prompt("Количество");
let arr = [];

while (arr.length < num) {
  arr.push(+prompt("числа"));
}

let num2 = 0;
arr.forEach(function (el) {
  num2 += el;
});

obj.sum = num2;

console.log(obj);
