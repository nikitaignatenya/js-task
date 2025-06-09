let a = [];
let b = [];

let i = 0;
let l = 0;
while (a.length < 3) {
  a.push(+prompt());
  i++;
}
while (b.length < 6) {
  b.push(+prompt());

  l++;
}
function test(...arr2) {
  console.log(arr2);
}

test(...a, ...b);

// let a = [];
// let b = [];

// for (let i = 0; i < 3; i++) {
//   a.push(+prompt());
//   b.push(+prompt());
// }

// console.log([...a, ...b]);
