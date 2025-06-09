let a = +prompt("Количество значений");
let arr = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
}

const res = arr.some(function (el) {
  if (!isNaN(el)) {
    return true;
  } else return false;
});

console.log(res);
