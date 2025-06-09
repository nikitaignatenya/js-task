let a = [1, 2, 3, 4, 5];
let result = 0;
let result2 = 0;

for (let i = 0; i < a.length; i++) {
  a[i] % 2 == 0 ? (result += 1) : (result2 += 1);
}

console.log(`${result} чётных и ${result2} нечётных`);
