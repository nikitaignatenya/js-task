let obj = { Анна: 95, Иван: 88, Мария: 92 };

let n = prompt();

const arr = Object.values(obj);

const res = arr.filter(function (el) {
  if (el > n) {
    return true;
  } else return false;
});

console.log(res);
