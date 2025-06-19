let str = "madam";
let palStr = str.split("").reverse().join("");
let i = 0;
let res = "";
function pal() {
  if (i == str.length) return;
  res = str[i] === palStr[i] ? true : false;
  i++;
  pal();
}
pal();
console.log(res);
