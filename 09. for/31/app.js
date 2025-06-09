let a = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let result = 0;
let result2 = 0;

for (let i = 0; i < a.length; i++) {
  a[i] == 5 ? (result += 1) : result != 0;
}

console.log(`${result} пятёрок`);
