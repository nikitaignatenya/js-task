let a = [1, 2, 3, 4, 5];

let result = 1;

for (let i = 0; i < a.length; i += 1) {
  result *= +a[i];
}

console.log(result);
