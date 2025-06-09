let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
  if (!isNaN(arr[i])) {
    console.log("число");
    break;
  }
}

const res = arr.filter(function (el) {
  if (el[0] == "a" || el[0] == "h") {
    return true;
  } else return false;
});

console.log(res);
