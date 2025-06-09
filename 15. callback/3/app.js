let a = +prompt('Количество значений');
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt('Значение'));
  if (isNaN(arr[i])) {
    console.log("Не число");
    break;
  }
}

let arr2 = [];
arr.forEach(function (el) {
  if (!arr2.includes(el)) {
    arr2.push(el);
  } else null;
});

if (arr2.length == 0) {
  console.log("Массив пуст");
} else {
  console.log(arr2);
}
