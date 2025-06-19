let n = +prompt();
let i = 1;
let count = 1;
function fact() {
  if (i > n) return;
  count *= i;
  i++;
  fact();
}

fact();
console.log(count);
