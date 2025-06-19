let n = 123;
let i = 0;
let sum = 0;

function findSum() {
  if (i == String(n).length) return;
  sum += +String(n).split("")[i];
  i++;
  findSum();
}
findSum();
console.log(sum);
