let a = ["42", "hello", "3.14", "world", "25"];

for (let i = 0; i < a.length; i++) {
  if (isNaN(a[i])) {
    a.splice(i, 1);
  }
  a[i] = Number(a[i]);
}
for (let el of a) {
  !Number.isInteger(el) ? a.splice(a.indexOf(el), 1) : null;
}
console.log(a);
