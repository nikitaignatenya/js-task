let a = [];
let f = +prompt("Количество цифр");

for (let i = 0; i < f; i++) {
  a.push(+prompt("Цифра"));
}
function mas(...arr) {
  // let res = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     res += arr[i];
  //   }
  // arr.forEach(function (el) {
  //   res += el;
  // });
  // console.log(res);
  const res = arr.reduce(function (sum, el) {
    return (sum += el);
  }, 0);
  console.log(res);
}
mas(...a);
