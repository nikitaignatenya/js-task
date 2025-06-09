let a = "abc";
let b = [];

for (let i = a.length - 1; i >= 0; i--) {
  b.push(a[i]);
}
console.log(b.join(" "));
