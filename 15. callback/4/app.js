let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
  if (isNaN(arr[i])) {
    console.log("Не число");
    break;
  }
}

const res = arr.reduce(function (sum, el) {
  return (sum *= el);
}, 1);

console.log(res);
