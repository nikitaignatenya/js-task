let arr = [10, 15, 22, 33];
let obj = {};

arr.forEach(function (el) {
  if (el % 2 == 0) {
    obj[el] = true;
  } else {
    obj[el] = false;
  }
});

console.log(obj);
