let a = [2, 5, 9, 15, 0, 4];

let result = "";

for (let i = 0; i < a.length; i++) {
  a[i] % 3 == 0 ? (result += ` ${a[i]}`) : result !== 0;
}

console.log(result);
