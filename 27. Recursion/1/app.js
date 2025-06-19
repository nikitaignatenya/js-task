let i = prompt();
let str = "";

function doStr() {
  if (i > 10) return;
  str += `${i} `;
  i++;
  doStr();
}
doStr();

console.log(str);
