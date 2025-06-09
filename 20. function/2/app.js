// function doWord(a, b, c) {
//   return `${a} ${b} ${c}`;

// }

// let arr = doWord(prompt(), prompt(), prompt());

// arr = arr.split(" ");
// console.log(arr);

// const res = arr.map(function (el, i, arr) {
//   if (i % 2 !== 0) {
//     return el.toUpperCase();
//   } else {
//     return el.toLowerCase();
//   }
// });

// console.log(res);

function doName(a, b, c) {
  const arr = `${a} ${b} ${c}`.split(" ");
  const res = arr.map(function (el, i) {
    if (i % 2 !== 0) return el.toUpperCase();
    else return el.toLowerCase();
  });
  console.log(res);
}
doName(prompt(), prompt(), prompt());
