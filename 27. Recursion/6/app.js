let array = [1, 2, 3, 4];
let i = 0;
let count = 0;

function arrlength() {
  if (i == array.length) return;
  count += 1;
  i++;
  arrlength();
}

arrlength();
console.log(count);
