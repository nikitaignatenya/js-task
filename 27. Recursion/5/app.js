let n = 2;
let step = 5;
let i = 1;
let count = 1;
function toPow() {
  if (i > step) return;
  count *= n;
  i++;
  toPow();
}
toPow();
console.log(count);
