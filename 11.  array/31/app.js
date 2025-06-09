let a = [7, 8, 9];
let i = 0;
let result = "";

do {
  result += `${a[i]} `;
  i += 1;
} while (i < a.length);

console.log(result);
