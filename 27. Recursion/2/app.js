let i = 4;
let str = "";

function doStr() {
  if (i < 0) return;
  if (i % 2 == 0) {
    str += `${i} `;
  }
  i--;
  doStr();
}

doStr();
console.log(str);
