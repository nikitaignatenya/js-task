let a = [2, 5, 9, 15, 0, 4];
let b = [];

let i = 0;
while (i < a.length) {
  if (a[i] % 3 == 0 || a[i] % 5 == 0) {
    b.push(a[i]);
  }
  i++;
}
console.log(b);
