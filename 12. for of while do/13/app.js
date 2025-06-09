let a = [];
let b = "-";
for (let i = 0; i < 10; i++) {
  a.push(prompt());
  b += `${a[i]}-`;
}

console.log(b);
// a = `-${a.join("-")}-`;
// console.log(a);
