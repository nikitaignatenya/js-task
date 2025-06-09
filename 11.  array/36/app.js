let a = [3, 6, 9, 10, 12];
let n = 0;
let result = "";

while (n < a.length && a[n] <= 10) {
  result += `${a[n]} `;
  n++;
}

console.log(result);
