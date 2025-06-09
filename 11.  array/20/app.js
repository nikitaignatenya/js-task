let a = [];
let b = [];

for (let i = 0; i < 3; i++) {
  a.push(+prompt());
  a[i] < 0 ? b.push(a[i]) : null;
}
if (b[0] < 0) {
  console.log(true);
} else {
  console.log(false);
}
