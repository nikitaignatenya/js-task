let a = [1, 2, 3, 2, 1];
let b = "";

for (let i = 0; i < a.length; i++) {
  a[i] == a[a.length - (i + 1)] ? (b = true) : (b = false);
}
console.log(b);
