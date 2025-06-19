let n = +prompt();
let i = 1;
let sum = 0;

function findSum() {
  if (i > n) return;
  if (Number.isInteger(i)) {
    sum += i;
  }
  i++;
  findSum();
}
findSum();
console.log(sum);
