function revSTR(str) {
  return str.split("").reverse().join("");
}

function printReverses(str) {
  console.log(str);
}
const resFirst = revSTR(prompt());
printReverses(resFirst);
