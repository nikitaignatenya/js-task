let i = 0;
let array = [1, 2, 3, 4];
let sumRes = 0;

function findSum() {
  if (i == array.length) return;
  sumRes = array.reduce((sum, el) => (sum += el), 0);
  i++;
  findSum();
}
findSum();

console.log(sumRes);
