let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
  if (!isNaN(arr[i])) {
    console.log("число");
    break;
  }
}

const res = arr.map(function (el) {
  return `#${el}`;
});
console.log(res);
