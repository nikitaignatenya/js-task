let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
  if (isNaN(arr[i])) {
    console.log("Не число");
    break;
  }
}

const numArray = arr.map(function (el) {
  return (el = Number(el));
});

const res = numArray.reduce(function (sum, el) {
  return (sum += el);
}, 0);

console.log(res);
