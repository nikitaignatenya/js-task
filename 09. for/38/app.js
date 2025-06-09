let a = [1, -2, 3, -4, 5, -6];
let result = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    continue;
  }
  if (a[i] > 0) {
    result += a[i];
  }
}
console.log(result);
