let i = 0;
let array = [1, 2, 3, 4];
let count = 0;
function findMax() {
  if (i == array.length) return;
  count < array[i] ? (count = array[i]) : count;
  i++;
  findMax();
}
findMax();
console.log(count);
