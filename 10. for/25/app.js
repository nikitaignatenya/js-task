let a = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];

let result = 0;

for (let i = 0; i < a.length; i++) {
  a[i] % 2 == 0 ? (result += 1) : result != 0;
}
console.log(result);
