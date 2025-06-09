let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
}

const res = arr.map(function (el) {
  return el ** 2;
});

console.log(res);
