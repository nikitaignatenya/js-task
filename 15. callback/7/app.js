let a = +prompt("Количество значений");
let array = [];
for (let i = 0; i < a; i++) {
  array.push(prompt("Значение"));
  if (isNaN(array[i])) {
    console.log("Не число");
    break;
  }
}

const res = array.map(function (el) {
  if (el % 2 == 0) {
    return (el = "Чёт");
  } else return (el = "Нечёт");
});

console.log(res);
