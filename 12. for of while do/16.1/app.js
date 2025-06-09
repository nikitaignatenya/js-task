let a = prompt().split("");
let b = [];
let i = 0;
let j = 1;
while (j < a.length && i < a.length) {
  a[i] % 2 !== 0 && a[j] % 2 !== 0 ? (a[i] += ":") : null;
  i++;
  j++;
}

console.log(a.join(""));

// let a = prompt().split("");
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   b.push(a[i]);
//   i < a.length - 1 && a[i] % 2 !== 0 && a[i + 1] % 2 !== 0 ? b.push(":") : null;
// }
// console.log(b);

// let a = "55639217";
// let b = [];

// for (let i = 1; i < a.length; i++) {
//   b.push(a[i - 1]);
//   a[i] % 2 !== 0 && a[i - 1] % 2 !== 0 ? b.push(":") : null;
// }
// b.push(a[a.length - 1]);
// console.log(b);
